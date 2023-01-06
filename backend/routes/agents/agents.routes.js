import express from "express";
import { createAgent, getAllAgents, login } from "../../controllers/agents/agents.ctrl.js";

const router = express.Router();

router
    .get('/', getAllAgents)

    .post('/new', createAgent)

    .post('/login', login);

export default router;