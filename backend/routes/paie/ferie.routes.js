import express from "express";

import * as feriesCtrl from '../../controllers/paie/ferie.ctrl.js';
import * as auth from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .get('/ferie/:agentId', auth.authDirection, feriesCtrl.getFeriesPerAgent)

    .post('/ferie/new', auth.authDirection, feriesCtrl.registerFerie);

export default router;
