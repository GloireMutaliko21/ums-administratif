import express from "express";

import * as heuresSuppCtrl from '../../controllers/paie/heuresupp.ctrl.js';
import * as auth from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .get('/heuresupp/:agentId', auth.authDirection, heuresSuppCtrl.getHeureSuppPerAgent)

    .post('/heuresupp/new', auth.authDirection, heuresSuppCtrl.registerHeureSupp);

export default router;
