import express from "express";

import * as maladAccidCtrl from '../../controllers/paie/maladAccident.ctrl.js';
import * as auth from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .get('/maladie/:agentId', auth.authDirection, maladAccidCtrl.getMaladAccPerAgent)

    .post('/maladie/new', auth.authDirection, maladAccidCtrl.registerMaladAccid);

export default router;