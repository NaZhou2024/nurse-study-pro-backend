import express from "express";
import { getQuiz } from "../controllers/quizController.js";

const router = express.Router();

router.get("/:topicId", getQuizzesByTopic);

export default router;
