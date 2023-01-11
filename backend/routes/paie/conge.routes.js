import express from "express";

import * as congeCtrl from '../../controllers/paie/conge.ctrl.js';

const router = express.Router();

router
    .get('/conge/:agentId', congeCtrl.getRemCongePerAgent)

    .post('/conge/new', congeCtrl.registerConge);

export default router;
