import express from "express";

import * as articleCtrl from "../../controllers/inventaire/article.ctrl.js";
import * as categCtrl from "../../controllers/inventaire/categArticle.ctrl.js";
import * as uniteCtrl from "../../controllers/inventaire/unities.ctrl.js";
import { authInventaire } from "../../middlewares/auth.mid.js";
import * as operationCtrl from "../../controllers/inventaire/operation.ctrl.js"

const router = express.Router();

router
    .get('/article/all', authInventaire, articleCtrl.getArticles)
    .post('/article/new', authInventaire, articleCtrl.createArticle)
    .get('/article/:idArticle', authInventaire, articleCtrl.getOneArticle)

    .post('/operation/new', authInventaire, operationCtrl.registerOperation)
    .get('/operation/fiche/today', authInventaire, operationCtrl.todayFicheStockGlobal)
    .get('/operation/fiche/week', authInventaire, operationCtrl.ficheStockWeek)
    .get('/operation/fiche/month', authInventaire, operationCtrl.ficheStockMonth)

    .get('/categ/all', authInventaire, categCtrl.getCategories)
    .post('/categ/new', authInventaire, categCtrl.createCateg)

    .get('/unite/all', authInventaire, uniteCtrl.getUnities)
    .post('/unite/new', authInventaire, uniteCtrl.createUnity)

export default router;