import express from "express";

import * as allocationCtrl from '../../controllers/paie/allocation.ctrl.js';

const router = express.Router();

router
    .get('/allocation/:agentId', allocationCtrl.getAllocationsPerAgent)

    .post('/allocation/new', allocationCtrl.registerAllocation);

export default router;