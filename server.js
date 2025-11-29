import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import topicRoutes from "./routes/topicRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://nurse-study-pro-frontend.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/topics", topicRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => res.send("Backend is running successfully!"));
app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running on port ${process.env.PORT}`)
  );
// app.listen(5000, () => console.log("Server running on port 5000"));

// SERVER
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch(err => console.error(err));
