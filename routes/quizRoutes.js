import express from "express";
import { getQuiz } from "../controllers/quizController.js";

const router = express.Router();

router.get("/:topicId", getQuiz);

export default router;
