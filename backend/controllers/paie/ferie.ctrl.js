import { QueryTypes } from 'sequelize';

import { dbSequelize } from "../../config/db.conf.js";
import Ferie from '../../models/paie/feries.mdl.js';

export const registerFerie = async (req, res, next) => {
    try {
        const { nombre, taux, agentId } = req.body;

        const ferie = await Ferie.create({ nombre, taux, agentId });

        //Find This created heuresupp remuneration and send it to front
        const createdFerie = await Ferie.findByPk(ferie.id, { include: 'agent' });
        res.status(201).json({ data: createdFerie });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};
