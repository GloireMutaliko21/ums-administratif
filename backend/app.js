import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { dbSequelize } from "./config/db.conf.js";
import { agentsUrl, baseUrl } from "./constants/routes.js";
import { serverError } from "./middlewares/errors.mid.js";

import gradeRoutes from "./routes/agents/grades.routes.js";

const app = express();

//Multer filte storage
const fileStorage = multer.diskStorage({});

//Multer file type filter
const fileFilter = (req, file, cb) => {
    const fileExtension = file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'
    if (fileExtension) {
        console.log(file.mimetype)
        cb(null, true);
    } else {
        cb(null, false);
    }
};

//Middlewares
app
    .use(express.urlencoded({ extended: false }))
    .use(multer({ storage: fileStorage, fileFilter }).single('image'))
    .use(express.json())
    .use('/', express.static(path.join(__dirname, 'public')))
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
    });

//Routes
app.use(`${baseUrl}${agentsUrl}`, gradeRoutes);

//Errors middlewares
app.use(serverError);

dbSequelize
    .sync()
    .then((result) => console.log('result'))
    .then(() => app.listen(2023, console.log('Running')))
    .catch(err => console.log(err))