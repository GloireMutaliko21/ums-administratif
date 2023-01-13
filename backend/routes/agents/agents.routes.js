import express from "express";
import { createAgent, getAllAgents, getNonPaidAgents, login } from "../../controllers/agents/agents.ctrl.js";

const router = express.Router();

router
    .get('/', getAllAgents)

    .get('/:mounth', getNonPaidAgents)

    .post('/new', createAgent)

    .post('/login', login);

export default router;