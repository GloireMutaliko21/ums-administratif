import express from "express";

import { souscrire } from '../../controllers/cassoc/souscription.ctrl.js'
import * as auth from "../../middlewares/auth.mid.js";

const router = express.Router();

router
    .post('/souscription/new', auth.authAll, souscrire);

export default router;