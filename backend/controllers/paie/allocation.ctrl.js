import { QueryTypes } from 'sequelize';

import { dbSequelize } from "../../config/db.conf.js";
import Allocation from '../../models/paie/allocations.mdl.js';

export const registerAllocation = async (req, res, next) => {
    try {
        const { nbEnfant, jours, taux, agentId } = req.body;

        const allocation = await Allocation.create({ nbEnfant, jours, taux, agentId });

        const createdAllocation = await Allocation.findByPk(allocation.id, { include: 'agent' });
        res.status(201).json({ data: createdAllocation });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getAllocationsPerAgent = async (req, res, next) => {
    try {
        const { agentId } = req.params;
        const { mounth } = req.query;

        const allocation = await dbSequelize.query(`SELECT sum(nbEnfant * taux * jours) AS total FROM allocations WHERE (agentId = '${agentId}' AND createdAt LIKE '${mounth}%')`, { type: QueryTypes.SELECT });

        res.status(200).json({ data: allocation });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};