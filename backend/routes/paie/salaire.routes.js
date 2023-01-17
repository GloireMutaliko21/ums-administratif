import express from "express";

import * as salaireCtrl from '../../controllers/paie/salaire.ctrl.js';
import * as auth from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .get('/salaire/:agentId', auth.authDirection, salaireCtrl.getSalairePerAgent)

    .post('/salaire/new', auth.authDirection, salaireCtrl.createSalaire);

export default router;