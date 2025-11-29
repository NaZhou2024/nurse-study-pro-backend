import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  completedQuizzes: [{ topicId: String, score: Number, date: Date }],
  bookmarks: [String],
});

export default mongoose.model("User", userSchema);
