import express from "express";

import * as cassocCtrl from '../../controllers/cassoc/cassoc.ctrl.js';
import * as auth from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .get('/all', auth.authAll, cassocCtrl.getCassocs)
    .post('/new', auth.authAll, cassocCtrl.createCasSoc);

export default router;