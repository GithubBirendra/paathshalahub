import { Router } from "express";
import Lecture from "../models/lecture.js";
import multer from "multer";
import { storage, cloudinary } from "../utils/cloudinary.js";

const upload = multer({ storage });
const lectureRouter = Router();

// ✅ GET all lectures
lectureRouter.get("/lecture", async (req, res) => {
  try {
    const lectures = await Lecture.find();
    res.json(lectures);
  } catch (error) {
    console.error("Fetch lectures failed:", error);
    res.status(500).json({ error: "Failed to fetch lectures" });
  }
});

// ✅ CREATE a new lecture
lectureRouter.post("/lecture", async (req, res) => {
  try {
    const { title, isFreePreview = false, hasVideo = false } = req.body;
    const newLecture = new Lecture({ title, isFreePreview, hasVideo });
    const saved = await newLecture.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Add lecture failed:", error);
    res.status(400).json({ error: "Failed to add lecture" });
  }
});

// ✅ UPDATE lecture by ID
lectureRouter.put("/lecture/:id", async (req, res) => {
  const updateData = {};
  ["title", "isFreePreview", "hasVideo"].forEach((field) => {
    if (req.body[field] !== undefined) updateData[field] = req.body[field];
  });

  try {
    const updatedLecture = await Lecture.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    if (!updatedLecture)
      return res.status(404).json({ error: "Lecture not found" });
    res.json(updatedLecture);
  } catch (error) {
    console.error("Update lecture failed:", error);
    res.status(500).json({ error: "Failed to update lecture" });
  }
});

// ✅ DELETE lecture by ID
lectureRouter.delete("/lecture/:id", async (req, res) => {
  try {
    await Lecture.findByIdAndDelete(req.params.id);
    res.json({ message: "Lecture Deleted" });
  } catch (error) {
    console.error("Delete lecture failed:", error);
    res.status(500).json({ error: "Failed to delete lecture" });
  }
});

// ✅ Upload video to Cloudinary (fixed to avoid validation errors)
lectureRouter.post(
  "/lecture/:id/upload-video",
  upload.single("video"),
  async (req, res) => {
    try {
      console.log("📥 Incoming file:", req.file);

      if (!req.file || !req.file.path) {
        return res.status(400).json({ error: "No video file uploaded" });
      }

      const videoUrl = req.file.path;
      console.log("✅ Uploaded to Cloudinary:", videoUrl);

      // Fetch existing lecture document first
      const lecture = await Lecture.findById(req.params.id);
      if (!lecture) {
        return res.status(404).json({ error: "Lecture not found" });
      }

      // Update only video related fields
      lecture.hasVideo = true;
      lecture.videoUrl = videoUrl;

      // Save the updated document
      await lecture.save();

      res.json(lecture);
    } catch (err) {
      console.error("❌ Video upload failed:", err);
      res.status(500).json({
        error: "Video upload failed",
        details: err.message,
      });
    }
  }
);

// ✅ Delete video from Cloudinary and DB
lectureRouter.delete("/lecture/:id/video", async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.id);
    if (!lecture || !lecture.videoUrl) {
      return res.status(404).json({ error: "Video not found" });
    }

    const parts = lecture.videoUrl.split("/");
    const fileName = parts.pop(); // e.g. video123.mp4
    const folder = parts.pop();   // e.g. lectures
    const publicId = `${folder}/${fileName.split(".")[0]}`;

    await cloudinary.uploader.destroy(publicId, { resource_type: "video" });

    lecture.hasVideo = false;
    lecture.videoUrl = "";
    await lecture.save();

    res.json({ message: "Video deleted" });
  } catch (err) {
    console.error("❌ Delete video failed:", err);
    res.status(500).json({ error: "Delete failed", details: err.message });
  }
});

// ✅ Catch multer & unexpected errors
lectureRouter.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    console.error("Multer error:", err);
    return res.status(400).json({ error: "Multer upload error", details: err.message });
  } else if (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ error: "Unexpected server error", details: err.message });
  }
  next();
});

export default lectureRouter;
