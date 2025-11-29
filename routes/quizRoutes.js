import express from "express";
import { getQuizzesByTopic } from "../controllers/quizController.js";

const router = express.Router();

router.get("/:topicId", getQuizzesByTopic);

export default router;
