import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  topicId: String,
  questions: [
    {
      questionText: String,
      options: [String],
      correctAnswer: String,
    },
  ],
});

export default mongoose.model("Quiz", quizSchema);
