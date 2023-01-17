import express from "express";

import * as taskList from "../../controllers/tasks/tasks.ctrl.js";
import * as auth from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .get('/:agentId', auth.authAll, taskList.getTasks)
    .get('/day/:agentId', auth.authAll, taskList.getTasksDay)
    .get('/week/:agentId', auth.authAll, taskList.getTasksWeek)
    .get('/month/:agentId', auth.authAll, taskList.getTasksMonth)
    .post('/new', auth.authAll, taskList.createTask)
    .put('/update/:id', auth.authAll, taskList.updateTask);

export default router;