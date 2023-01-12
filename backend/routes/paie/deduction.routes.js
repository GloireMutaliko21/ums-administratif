import express from "express";

import * as deductionCtrl from '../../controllers/paie/deduction.ctrl.js';

const router = express.Router();

router
    .get('/deduction/:agentId', deductionCtrl.getDeductionPerAgent)

    .get('/deduction/:agentId/:libelle', deductionCtrl.getDeductionsPerAgentCateg)

    .post('/deduction/new', deductionCtrl.registerDeduction);

export default router;
