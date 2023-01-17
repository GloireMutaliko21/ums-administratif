import express from "express";

import * as congeCtrl from '../../controllers/paie/conge.ctrl.js';
import * as auth from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .get('/conge/:agentId', auth.authDirection, congeCtrl.getRemCongePerAgent)

    .post('/conge/new', auth.authDirection, congeCtrl.registerConge);

export default router;
