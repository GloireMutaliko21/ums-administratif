import express from "express";

import * as categCtrl from "../../controllers/inventaire/categArticle.ctrl.js";
import { authInventaire } from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .get('/categ/all', categCtrl.getCategories)
    .post('/categ/new', authInventaire, categCtrl.createCateg);

export default router;