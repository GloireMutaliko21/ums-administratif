import express from "express";

import * as allocationCtrl from '../../controllers/paie/allocation.ctrl.js';
import * as auth from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .get('/allocation/:agentId', auth.authDirection, allocationCtrl.getAllocationsPerAgent)

    .post('/allocation/new', auth.authDirection, allocationCtrl.registerAllocation);

export default router;