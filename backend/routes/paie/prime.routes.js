import express from "express";

import * as primesCtrl from '../../controllers/paie/prime.ctrl.js';

const router = express.Router();

router
    .get('/prime/:agentId', primesCtrl.getPrimesPerAgent)

    .post('/prime/new', primesCtrl.registerPrime);

export default router;