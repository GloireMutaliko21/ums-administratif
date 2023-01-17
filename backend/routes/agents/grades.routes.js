import express from "express";

import { createGrade, getGrades } from "../../controllers/agents/grades.ctrl.js";
import * as auth from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .get('/grades', auth.authDirection, getGrades)

    .post('/grades/new', auth.authDirection, createGrade);

export default router;