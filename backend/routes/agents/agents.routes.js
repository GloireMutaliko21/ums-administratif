import express from "express";
import { createAgent } from "../../controllers/agents/agents.ctrl.js";

const router = express.Router();

router
    .post('/new', createAgent)

export default router;