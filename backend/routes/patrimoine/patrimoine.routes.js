import express from "express";

import { authPatrimoine } from "../../middlewares/auth.mid.js";
import * as categCtrl from "../../controllers/patrimoine/categBien.ctrl.js";
import * as bienCtrl from "../../controllers/patrimoine/bien.ctrl.js"

const router = express.Router();

router
    .get('/bien/all', authPatrimoine, bienCtrl.getAllBiens)
    .post('/bien/new', authPatrimoine, bienCtrl.createBien)

    .get('/categ/all', authPatrimoine, categCtrl.getCategBiens)
    .post('/categ/new', authPatrimoine, categCtrl.createCategBien)

export default router