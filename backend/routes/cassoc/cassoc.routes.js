import express from "express";

import * as cassocCtrl from '../../controllers/cassoc/cassoc.ctrl.js'

const router = express.Router();

router
    .post('/new', cassocCtrl.createCasSoc);

export default router;