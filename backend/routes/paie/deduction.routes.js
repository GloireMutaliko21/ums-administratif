import express from "express";

import * as deductionCtrl from '../../controllers/paie/deduction.ctrl.js';

const router = express.Router();

router
    // .get('/ferie/:agentId', deductionCtrl.getFeriesPerAgent)

    .post('/deduction/new', deductionCtrl.registerDeduction);

export default router;
