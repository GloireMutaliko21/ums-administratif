import { QueryTypes } from 'sequelize';

import { dbSequelize } from "../../config/db.conf.js";
import RemunConge from '../../models/paie/conges.mdl.js';

export const registerConge = async (req, res, next) => {
    try {
        const { jours, taux, agentId } = req.body;

        const remunConge = await RemunConge.create({ jours, taux, agentId });

        const createdRemunconge = await RemunConge.findByPk(remunConge.id, { include: 'agent' });
        res.status(201).json({ data: createdRemunconge });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getRemCongePerAgent = async (req, res, next) => {
    try {
        const { agentId } = req.params;
        const { mounth } = req.query;

        const remunConge = await dbSequelize.query(`SELECT sum(jours) as jours, sum(jours * taux) AS total FROM remunconges WHERE (agentId = '${agentId}' AND createdAt LIKE '${mounth}%')`, { type: QueryTypes.SELECT });

        res.status(200).json({ data: remunConge });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};