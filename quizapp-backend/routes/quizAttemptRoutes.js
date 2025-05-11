import express from "express";
import { authenticateUser } from "../middlewares/authMiddleware.js";
import {
  createQuizAttempt,
  getUserQuizAttempts,
  getQuizAttemptById,
  deleteQuizAttempt,
  submitQuizAnswer
} from "../controllers/quizAttemptController.js";

const router = express.Router();

// Create a new quiz attempt (changed from "/create" to "/" for REST convention)
router.post("/", authenticateUser, createQuizAttempt);

// Submit an answer for a quiz attempt
router.post("/:attemptId/answers", authenticateUser, submitQuizAnswer);

// Get all quiz attempts for the authenticated user
router.get("/", authenticateUser, getUserQuizAttempts);

// Get a quiz attempt by ID
router.get("/:id", authenticateUser, getQuizAttemptById);

// Delete a quiz attempt
router.delete("/:id", authenticateUser, deleteQuizAttempt);

export default router;
