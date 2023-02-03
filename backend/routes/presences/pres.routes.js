import express from "express";

import * as auth from "../../middlewares/auth.mid.js";
import * as presCtrl from "../../controllers/presences/pres.ctrl.js"

const router = express.Router();

router
    .post('/pres/new', auth.authAll, presCtrl.createPresence)

export default router;