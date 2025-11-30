import express from "express";
import { loginUser } from "../controllers/authController.js";
import { allowCors } from "../corsMiddleware.js";

const router = express.Router();

router.post("/login", loginUser);

export default allowCors((req, res) => router(req, res));
