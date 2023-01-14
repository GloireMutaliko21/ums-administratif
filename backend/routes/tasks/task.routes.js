import express from "express";

import * as taskList from "../../controllers/tasks/tasks.ctrl.js";

const router = express.Router();

router
    .get('/:agentId', taskList.getTasks)
    .post('/new', taskList.createTask)
    .put('/update/:id', taskList.updateTask);

export default router;