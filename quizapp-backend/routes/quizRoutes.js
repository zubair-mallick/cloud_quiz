import express from 'express';
import { createQuiz, getAllQuizzes, deleteQuiz } from '../controllers/quizController.js';
import { getQuizQuestions } from '../controllers/questionController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Protected: Create a quiz (Admin/Teacher feature maybe later)
router.post('/create', authenticateUser, createQuiz);

// Public: Get all quizzes
router.get('/', getAllQuizzes);

// Get questions for a specific quiz
router.get('/:id/questions', authenticateUser, getQuizQuestions);

// Protected: Delete a quiz by ID
router.delete('/:id', authenticateUser, deleteQuiz);

export default router;
