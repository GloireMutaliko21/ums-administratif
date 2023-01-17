import express from "express";

import * as cassocCtrl from '../../controllers/cassoc/cassoc.ctrl.js';
import * as auth from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .get('/', auth.authDirection, cassocCtrl.getPrivileCas)
    .get('/all', auth.authDirection, cassocCtrl.getCassocs)
    .post('/new', auth.authAll, cassocCtrl.createCasSoc);

export default router;