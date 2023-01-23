import express from "express";

import { authPatrimoine } from "../../middlewares/auth.mid.js";
import * as categCtrl from "../../controllers/patrimoine/categBien.ctrl.js"

const router = express.Router();

router
    .post('/categ/new', authPatrimoine, categCtrl.createCategBien)

export default router