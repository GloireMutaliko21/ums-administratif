import express from "express";
import { createGrade } from "../../controllers/agents/grades.ctrl.js";

const router = express.Router();

router
    .get('/test', createGrade)

export default router;