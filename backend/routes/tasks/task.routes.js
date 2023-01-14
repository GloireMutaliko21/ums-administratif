import express from "express";

import * as taskList from "../../controllers/tasks/tasks.ctrl.js";

const router = express.Router();

router
    .post('/new', taskList.createTask);

export default router;