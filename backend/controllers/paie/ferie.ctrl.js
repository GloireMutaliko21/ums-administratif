import { QueryTypes } from 'sequelize';

import { dbSequelize } from "../../config/db.conf.js";
import Ferie from '../../models/paie/feries.mdl.js';

export const registerFerie = async (req, res, next) => {
    try {
        const { nombre, taux, agentId } = req.body;

        const ferie = await Ferie.create({ nombre, taux, agentId });

        const createdFerie = await Ferie.findByPk(ferie.id, { include: 'agent' });
        res.status(201).json({ data: createdFerie });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getFeriesPerAgent = async (req, res, next) => {
    try {
        const { agentId } = req.params;
        const { mounth } = req.query;

        const feries = await dbSequelize.query(`SELECT sum(nombre * taux) AS total FROM feries WHERE (agentId = '${agentId}' AND createdAt LIKE '${mounth}%')`, { type: QueryTypes.SELECT });

        res.status(200).json({ data: feries });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};
