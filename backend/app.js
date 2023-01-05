import express from "express";

import { dbSequelize } from "./config/db.conf.js";

const app = express();

dbSequelize
    .sync()
    .then(() => app.listen(2023, console.log('Running')))
    .catch(err => console.log(err))