import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { dbSequelize } from "./config/db.conf.js";
import { serverError } from "./middlewares/errors.mid.js";

//Import Routes
import { agentsUrl, baseUrl, cassocUrl, inventaireUrl, paieUrl, patrimoineUrl, presenceUrl, taskUrl } from "./constants/routes.js";
import gradeRoutes from "./routes/agents/grades.routes.js";
import agentRoutes from "./routes/agents/agents.routes.js";
import taskRoutes from "./routes/tasks/task.routes.js";
import cassocRoutes from "./routes/cassoc/cassoc.routes.js";
import souscriptionRoutes from "./routes/cassoc/souscription.routes.js";
import * as paieRoutes from "./routes/paie/index.routes.js";
import * as presRoutes from "./routes/presences/index.routes.js";
import inventaireRoutes from "./routes/iventaire/inventaire.routes.js";
import patrimoineRoutes from "./routes/patrimoine/patrimoine.routes.js";

//Import Models
import Grades from "./models/agents/grades.mdl.js";
import Agent from "./models/agents/agents.mdl.js";
import Task from "./models/tasks/task.mdl.js";
import Cassoc from "./models/cassoc/cassoc.mdl.js";
import Souscription from './models/cassoc/souscriprion.mdl.js';
import * as PaieModels from "./models/paie/index.js";
import CategArticle from './models/inventaire/categArticle.mdl.js';
import Article from "./models/inventaire/article.mdl.js";
import Unite from './models/inventaire/unities.mdl.js';
import Operation from './models/inventaire/operation.mdl.js';
import Commande from "./models/inventaire/commande.mdl.js";
import Bien from "./models/patrimoine/bien.mdl.js";
import CategBien from "./models/patrimoine/categBien.mdl.js";
import Presence from "./models/presences/pres.mdl.js";

import createDefaultUser from './utils/defaultUser.utl.js';

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
    .use(cors({
        origin: '*'
    }))
    .use(express.urlencoded({ extended: false }))
    .use(multer({ storage: fileStorage, fileFilter }).single('imageUrl'))
    .use(express.json())
    .use('/', express.static(path.join(__dirname, 'public')));


//Routes
app.use(`${baseUrl}${agentsUrl}`, gradeRoutes)
    .use(`${baseUrl}${agentsUrl}`, agentRoutes)
    .use(`${baseUrl}${paieUrl}`, paieRoutes.heureSupp)
    .use(`${baseUrl}${paieUrl}`, paieRoutes.ferie)
    .use(`${baseUrl}${paieUrl}`, paieRoutes.conge)
    .use(`${baseUrl}${paieUrl}`, paieRoutes.prime)
    .use(`${baseUrl}${paieUrl}`, paieRoutes.maladAccid)
    .use(`${baseUrl}${paieUrl}`, paieRoutes.deduction)
    .use(`${baseUrl}${paieUrl}`, paieRoutes.allocation)
    .use(`${baseUrl}${paieUrl}`, paieRoutes.salaire)
    .use(`${baseUrl}${taskUrl}`, taskRoutes)
    .use(`${baseUrl}${cassocUrl}`, cassocRoutes)
    .use(`${baseUrl}${cassocUrl}`, souscriptionRoutes)
    .use(`${baseUrl}${inventaireUrl}`, inventaireRoutes)
    .use(`${baseUrl}${patrimoineUrl}`, patrimoineRoutes)
    .use(`${baseUrl}${presenceUrl}`, presRoutes.pres)

//Errors middlewares
app.use(serverError);

//Definition des relations entre models
Grades.hasMany(Agent);
Agent.belongsTo(Grades);
//Paie relations between agent
Agent.hasMany(PaieModels.Allocation);
PaieModels.Allocation.belongsTo(Agent);
Agent.hasMany(PaieModels.Deduction);
PaieModels.Deduction.belongsTo(Agent);
Agent.hasMany(PaieModels.Ferie);
PaieModels.Ferie.belongsTo(Agent);
Agent.hasMany(PaieModels.HeureSupp);
PaieModels.HeureSupp.belongsTo(Agent);
Agent.hasMany(PaieModels.MaladAccid);
PaieModels.MaladAccid.belongsTo(Agent);
Agent.hasMany(PaieModels.Prime);
PaieModels.Prime.belongsTo(Agent);
Agent.hasMany(PaieModels.RemunConge);
PaieModels.RemunConge.belongsTo(Agent);
Agent.hasMany(PaieModels.Salaire);
PaieModels.Salaire.belongsTo(Agent);

Agent.hasMany(Task);
Task.belongsTo(Agent);
Agent.hasMany(Cassoc);
Cassoc.belongsTo(Agent);
Agent.hasMany(Souscription);
Souscription.belongsTo(Agent);
Cassoc.hasMany(Souscription);
Souscription.belongsTo(Cassoc);

CategArticle.hasMany(Article);
Article.belongsTo(CategArticle);
Unite.hasMany(Article);
Article.belongsTo(Unite);
Article.hasMany(Operation);
Operation.belongsTo(Article);
Article.hasMany(Commande);
Commande.belongsTo(Article);
CategBien.hasMany(Bien);
Bien.belongsTo(CategBien);

Agent.hasMany(Presence);
Presence.belongsTo(Agent);

dbSequelize
    // .sync({ alter: true })
    .sync()
    .then((result) => createDefaultUser()
        .then(() => console.log('Admin initialized'))
    )
    .then(() => app.listen(2023, console.log('Running')))
    .catch(err => console.log(err))