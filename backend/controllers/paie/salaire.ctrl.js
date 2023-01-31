import { QueryTypes } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";
import Salaire from "../../models/paie/salaire.mdl.js";

export const createSalaire = async (req, res, next) => {
    try {
        const {
            mois, salaires,
            heureSupp, ferie,
            conge, prime,
            maladie, deduction,
            allocation, agentId
        } = req.body;

        const salaire = await Salaire.findOne({
            where: { mois, agentId }
        });

        if (salaire) {
            res.status(208).json({ data: 'Agent déjà payé' });
            return;
        }

        const newSalaire = await Salaire.create({
            mois, salaires,
            heureSupp, ferie,
            conge, prime,
            maladie, deduction,
            allocation, agentId
        });

        const createdSalaire = await Salaire.findByPk(newSalaire.id, { include: 'agent' });
        res.status(201).json({ data: createdSalaire });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getSalairePerAgent = async (req, res, next) => {
    try {
        const { agentId } = req.params;
        const { mounth } = req.query;

        const salaire = await Salaire.findOne({
            where: { agentId, mois: mounth }, include: 'agent'
        });

        res.status(200).json({ data: salaire });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getListePaie = async (req, res, next) => {
    try {
        const { month } = req.query;

        const liste = await dbSequelize
            .query(`SELECT nom, postnom, prenom,
            salaires, heureSupp, ferie, conge, prime, maladie, deduction, allocation
            FROM salaires INNER JOIN agents ON salaires.agentId = agents.id
            WHERE mois = '${month}'`,
                { type: QueryTypes.SELECT }
            );
        const listePaie = liste?.map((item) => {
            const salaires = JSON.stringify(item.salaires);
            const heureSupp = JSON.stringify(item.heureSupp);
            const ferie = JSON.stringify(item.ferie);
            const conge = JSON.stringify(item.conge);
            const prime = JSON.stringify(item.prime);
            const maladie = JSON.stringify(item.maladie);
            const deduction = JSON.stringify(item.deduction);
            const allocation = JSON.stringify(item.allocation);
            return {
                ...item,
                salaires: JSON.parse(salaires).base * JSON.parse(salaires).taux,
                heureSupp: JSON.parse(heureSupp).heures * JSON.parse(heureSupp).taux,
                ferie: JSON.parse(ferie).jours * JSON.parse(ferie).taux,
                conge: JSON.parse(conge).jours * JSON.parse(conge).taux,
                prime: Object.values(JSON.parse(prime)).reduce((a, c) => a + c, 0),
                maladie: JSON.parse(maladie).jours * JSON.parse(maladie).taux,
                deduction: Object.values(JSON.parse(deduction)).reduce((a, c) => a + c, 0),
                allocation: JSON.parse(allocation).taux * JSON.parse(allocation).jours * JSON.parse(allocation).enfants,
            }
            // return {
            //     ...item,
            //     salaires: JSON.parse(item.salaires).base * JSON.parse(item.salaires).taux,
            //     heureSupp: JSON.parse(item.heureSupp).heures * JSON.parse(item.heureSupp).taux,
            //     ferie: JSON.parse(item.ferie).jours * JSON.parse(item.ferie).taux,
            //     conge: JSON.parse(item.conge).jours * JSON.parse(item.conge).taux,
            //     prime: Object.values(JSON.parse(item.prime)).reduce((a, c) => a + c, 0),
            //     maladie: JSON.parse(item.maladie).jours * JSON.parse(item.maladie).taux,
            //     deduction: Object.values(JSON.parse(item.deduction)).reduce((a, c) => a + c, 0),
            //     allocation: JSON.parse(item.allocation).taux * JSON.parse(item.allocation).jours * JSON.parse(item.allocation).enfants,
            // }
        });

        if (!liste) {
            res.status(204).json({ data: 'Aucune fiche pour ce mois' });
            return;
        }
        res.status(200).json({ data: listePaie });
    } catch (err) {
        console.log(err);
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};