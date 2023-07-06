import { QueryTypes } from 'sequelize';

import { dbSequelize } from "../../config/db.conf.js";
import MaladAccid from '../../models/paie/maladAccid.mdl.js';

export const registerMaladAccid = async (req, res, next) => {
    try {
        const { jours, taux, libelle, agentId } = req.body;

        const maladieAccid = await MaladAccid.create({ jours, taux, libelle, agentId });

        const createdMaladAccid = await MaladAccid.findByPk(maladieAccid.id, { include: 'agent' });
        res.status(201).json({ data: createdMaladAccid });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getMaladAccPerAgent = async (req, res, next) => {
    try {
        const { agentId } = req.params;
        const { mounth } = req.query;

        const maladAcc = await dbSequelize.query(`SELECT sum(jours) as jours, sum(jours * taux) AS total FROM maladAccs WHERE (agentId = '${agentId}' AND createdAt LIKE '${mounth}%')`, { type: QueryTypes.SELECT });

        res.status(200).json({ data: maladAcc });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};