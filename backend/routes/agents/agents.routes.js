import express from "express";

import { createAgent, getAllAgents, getNonPaidAgents, login } from "../../controllers/agents/agents.ctrl.js";
import * as auth from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .get('/', auth.authDirection, getAllAgents)

    .get('/:mounth', auth.authDirection, getNonPaidAgents)

    .post('/new', auth.authDirection, createAgent)

    .post('/login', login);

export default router;