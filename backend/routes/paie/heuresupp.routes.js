import express from "express";

import * as heuresSuppCtrl from '../../controllers/paie/heuresupp.ctrl.js';

const router = express.Router();

router
    .get('/heuresupp/:agentId', heuresSuppCtrl.getHeureSuppPerAgent)

    .post('/heuresupp/new', heuresSuppCtrl.registerHeureSupp);

export default router;
