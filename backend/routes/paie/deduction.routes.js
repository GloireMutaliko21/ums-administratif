import express from "express";

import * as deductionCtrl from '../../controllers/paie/deduction.ctrl.js';
import * as auth from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .get('/deduction/:agentId', auth.authDirection, deductionCtrl.getDeductionPerAgent)

    .get('/deduction/:agentId/:libelle', auth.authDirection, deductionCtrl.getDeductionsPerAgentCateg)

    .post('/deduction/new', auth.authDirection, deductionCtrl.registerDeduction);

export default router;
