import { Router } from "express";
import { courseValidationSchema} from "../models/course.js";
import Course from "../models/course.js";

const courseRouter = Router();

courseRouter.get("/course", async (req, res) => {
  try {
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching courses" });
  }
});

courseRouter.post("/course", async (req, res) => {
  try {
    // Validate using Yup schema
    const validatedData = await courseValidationSchema.validate(req.body, { abortEarly: false });
    
    const newCourse = await Course.create(validatedData);
    return res.status(201).json(newCourse);
  } catch (error) {
    if (error.name === "ValidationError" || error.name === "YupValidationError") {
      return res.status(400).json({
        message: "Validation error",
        errors: error.errors || error.message,
      });
    }
    return res.status(500).json({ message: "Error creating course" });
  }
});

courseRouter.get("course/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching course" });
  }
});

courseRouter.put("course/:id", async (req, res) => {
  try {
    // Validate input
    const validatedData = await courseValidationSchema.validate(req.body, { abortEarly: false });
    
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, validatedData, { new: true });
    if (!updatedCourse) return res.status(404).json({ message: "Course not found" });
    return res.status(200).json(updatedCourse);
  } catch (error) {
    if (error.name === "ValidationError" || error.name === "YupValidationError") {
      return res.status(400).json({
        message: "Validation error",
        errors: error.errors || error.message,
      });
    }
    return res.status(500).json({ message: "Error updating course" });
  }
});

courseRouter.delete("course/:id", async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    if (!deletedCourse) return res.status(404).json({ message: "Course not found" });
    return res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting course" });
  }
});

export default courseRouter;
