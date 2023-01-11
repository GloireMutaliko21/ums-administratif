import express from "express";

import * as feriesCtrl from '../../controllers/paie/ferie.ctrl.js';

const router = express.Router();

router
    .get('/ferie/:agentId', feriesCtrl.getFeriesPerAgent)

    .post('/ferie/new', feriesCtrl.registerFerie);

export default router;
