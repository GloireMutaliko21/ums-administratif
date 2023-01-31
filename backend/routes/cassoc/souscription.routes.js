import express from "express";

import { getAllSouscriptions, souscrire } from '../../controllers/cassoc/souscription.ctrl.js'
import * as auth from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .get('/souscription/:casSocId', auth.authDirection, getAllSouscriptions)

    .post('/souscription/new', auth.authAll, souscrire);

export default router;