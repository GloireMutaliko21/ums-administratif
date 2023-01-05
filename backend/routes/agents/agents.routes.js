import express from "express";
import { createAgent, login } from "../../controllers/agents/agents.ctrl.js";

const router = express.Router();

router
    .post('/new', createAgent)

    .post('/login', login);

export default router;