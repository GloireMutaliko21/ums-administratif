import express from "express";

import * as maladAccidCtrl from '../../controllers/paie/maladAccident.ctrl.js';

const router = express.Router();

router
    .get('/maladie/:agentId', maladAccidCtrl.getMaladAccPerAgent)

    .post('/maladie/new', maladAccidCtrl.registerMaladAccid);

export default router;