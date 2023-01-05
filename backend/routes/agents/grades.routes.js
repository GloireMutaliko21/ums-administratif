import express from "express";
import { createGrade } from "../../controllers/agents/grades.ctrl.js";

const router = express.Router();

router
    .post('/grades/new', createGrade)

export default router;