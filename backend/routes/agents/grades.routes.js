import express from "express";
import { createGrade, getGrades } from "../../controllers/agents/grades.ctrl.js";

const router = express.Router();

router
    .get('/grades', getGrades)

    .post('/grades/new', createGrade);

export default router;