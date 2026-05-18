import express from "express";
import { uploadResume } from "../controllers/aiController.js";
const router = express.Router();

// ✅ THIS LINE IS VERY IMPORTANT
router.post("/uploadResume", uploadResume);

export default router;