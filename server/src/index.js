import express from "express";
import dotenv from "dotenv";
import connect from './db/connect.js';
import userRouter from './routes/user.js';
import courseRouter from "./routes/course.js";
import lectureRouter from "./routes/lecture.js";
import cors from 'cors';

dotenv.config(); // ✅ Load .env before using environment variables

const app = express();
const port = process.env.PORT || 8080;


connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ To parse form data

app.use(userRouter);
app.use(courseRouter);
app.use(lectureRouter);

// Optional: confirm env vars
console.log("🔐 CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY ? "Loaded ✅" : "Missing ❌");

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
