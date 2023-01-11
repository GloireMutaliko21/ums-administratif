import express from "express";

import * as congeCtrl from '../../controllers/paie/conge.ctrl.js';

const router = express.Router();

router
    // .get('/conge/:agentId', heuresSuppCtrl.getHeureSuppPerAgent)

    .post('/conge/new', congeCtrl.registerConge);

export default router;
