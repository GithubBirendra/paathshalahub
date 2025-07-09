"use client";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

type Lecture = {
  _id: string;
  title: string;
  isFreePreview: boolean;
  hasVideo: boolean;
  videoUrl?: string;
};

export default function Curriculum() {
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const [isAdding, setIsAdding] = useState(false);
  const titleUpdateTimeout = useRef<{ [key: string]: NodeJS.Timeout }>({});

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/lecture`);
        setLectures(res.data);
      } catch (err) {
        console.error("Fetch error:", err);
        toast.error("❌ Failed to load lectures.");
      }
    };
    fetchLectures();
  }, []);

  const updateLecture = async (id: string, updatedFields: Partial<Lecture>) => {
    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/lecture/${id}`, updatedFields);
      setLectures((prev) => prev.map((l) => (l._id === id ? res.data : l)));
      toast.success("✅ Lecture updated");
    } catch (err) {
      console.error("Update error:", err);
      toast.error("❌ Could not update lecture.");
    }
  };

  const updateLectureTitle = (id: string, title: string) => {
    if (!title.trim()) return;
    if (titleUpdateTimeout.current[id]) {
      clearTimeout(titleUpdateTimeout.current[id]);
    }
    titleUpdateTimeout.current[id] = setTimeout(() => {
      updateLecture(id, { title });
    }, 500);
  };

  const addNewLecture = async () => {
    setIsAdding(true);
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/lecture`, {
        title: "Untitled Lecture",
        isFreePreview: false,
        hasVideo: false,
      });
      setLectures([...lectures, res.data]);
      toast.success("✅ New lecture created.");
    } catch (err) {
      console.error("Add error:", err);
      toast.error("❌ Failed to create new lecture.");
    } finally {
      setIsAdding(false);
    }
  };

  const toggleFreePreview = (id: string) => {
    const lecture = lectures.find((l) => l._id === id);
    if (lecture) {
      updateLecture(id, { isFreePreview: !lecture.isFreePreview });
    }
  };

  const handleVideoUpload = async (id: string, file: File) => {
    const isValidType = ["video/mp4", "video/webm", "video/quicktime"].includes(file.type);
    const isValidSize = file.size <= 1024 * 1024 * 1024; // 1GB

    if (!isValidType) {
      toast.error("❌ Invalid format. Only MP4, MOV, and WEBM allowed.");
      return;
    }

    if (!isValidSize) {
      toast.error("❌ Video file too large. Max size is 1GB.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("video", file);

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/lecture/${id}/upload-video`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 1));
          setUploadProgress((prev) => ({ ...prev, [id]: percent }));
        },
      });

      setLectures((prev) => prev.map((l) => (l._id === id ? res.data : l)));
      setUploadProgress((prev) => ({ ...prev, [id]: 0 }));
      toast.success("🎥 Video uploaded successfully.");
    } catch (err) {
      console.error("Upload error:", err);
      toast.error("❌ Failed to upload video.");
    }
  };

  const handleDrop = (id: string, e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleVideoUpload(id, file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleVideoDelete = async (id: string) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/lecture/${id}/video`);
      setLectures((prev) =>
        prev.map((l) => (l._id === id ? { ...l, hasVideo: false, videoUrl: "" } : l))
      );
      toast.success("🗑️ Video deleted.");
    } catch (err) {
      console.error("Delete video error:", err);
      toast.error("❌ Failed to delete video.");
    }
  };

  const deleteLecture = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lecture?")) return;
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/lecture/${id}`);
      setLectures(lectures.filter((l) => l._id !== id));
      toast.success("🗑️ Lecture deleted.");
    } catch (err) {
      console.error("Delete lecture error:", err);
      toast.error("❌ Failed to delete lecture.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Create Course Curriculum</h2>
        <Button onClick={addNewLecture} disabled={isAdding} className="bg-blue-600 hover:bg-blue-700">
          {isAdding ? "Adding..." : "Add Lecture"}
        </Button>
      </div>

      <div className="space-y-4">
        {lectures.map((lecture, index) => (
          <div
            key={lecture._id}
            onDrop={(e) => handleDrop(lecture._id, e)}
            onDragOver={handleDragOver}
            className="border border-gray-200 rounded-lg p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="font-medium text-gray-700">Lecture {index + 1}</span>
              <Input
                value={lecture.title}
                onChange={(e) => {
                  const newTitle = e.target.value;
                  setLectures((prev) =>
                    prev.map((l) =>
                      l._id === lecture._id ? { ...l, title: newTitle } : l
                    )
                  );
                  updateLectureTitle(lecture._id, newTitle);
                }}
                placeholder="Enter lecture title"
                className="flex-1"
              />
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`free-preview-${lecture._id}`}
                  checked={lecture.isFreePreview}
                  onCheckedChange={() => toggleFreePreview(lecture._id)}
                />
                <label htmlFor={`free-preview-${lecture._id}`} className="text-sm font-medium">
                  Free Preview
                </label>
              </div>
            </div>

            <input
              id={`file-${lecture._id}`}
              type="file"
              accept="video/mp4,video/quicktime,video/webm"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleVideoUpload(lecture._id, e.target.files[0]);
                }
              }}
            />

            <div className="mb-3">
              <Button
                variant="outline"
                onClick={() => document.getElementById(`file-${lecture._id}`)?.click()}
                className="text-blue-700 hover:bg-blue-100 hover:text-blue-900"
              >
                {lecture.hasVideo ? "Replace Video" : "Upload Video"}
              </Button>
              <p className="text-sm text-gray-500 mt-1">Or drag & drop video file (max 1GB)</p>
            </div>

            {uploadProgress[lecture._id] > 0 && uploadProgress[lecture._id] < 100 && (
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-200"
                  style={{ width: `${uploadProgress[lecture._id]}%` }}
                />
              </div>
            )}

            {lecture.hasVideo && lecture.videoUrl && (
              <div className="mb-4 space-y-2">
                <video width="400" controls className="rounded-lg shadow">
                  <source src={lecture.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Button
                  variant="outline"
                  className="text-red-700 hover:bg-red-100 hover:text-red-800"
                  onClick={() => handleVideoDelete(lecture._id)}
                >
                  Delete Video
                </Button>
              </div>
            )}

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={() => deleteLecture(lecture._id)}
              >
                <Trash2 className="h-4 w-4" />
                Delete Lecture
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
