import express from "express";

import * as salaireCtrl from '../../controllers/paie/salaire.ctrl.js';

const router = express.Router();

router
    .get('/salaire/:agentId', salaireCtrl.getSalairePerAgent)

    .post('/salaire/new', salaireCtrl.createSalaire);

export default router;