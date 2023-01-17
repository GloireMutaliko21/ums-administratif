import express from "express";

import * as primesCtrl from '../../controllers/paie/prime.ctrl.js';
import * as auth from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .get('/prime/:agentId', auth.authDirection, primesCtrl.getPrimesPerAgent)

    .get('/prime/:agentId/:libelle', auth.authDirection, primesCtrl.getPrimesPerAgentCateg)

    .post('/prime/new', auth.authDirection, primesCtrl.registerPrime);

export default router;