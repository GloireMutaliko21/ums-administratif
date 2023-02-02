import express from "express";

import { createAgent, editLoginParams, getAllAgents, getNonPaidAgents, getOneAgent, login } from "../../controllers/agents/agents.ctrl.js";
import * as auth from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .get('/', auth.authDirection, getAllAgents)

    .get('/:id', auth.authDirection, getOneAgent)

    .get('/:mounth', auth.authDirection, getNonPaidAgents)

    .post('/new', auth.authDirection, createAgent)

    .put('/edit/profile', auth.authAll, editLoginParams)

    .post('/login', login);

export default router;