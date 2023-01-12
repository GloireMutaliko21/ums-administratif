import { QueryTypes } from 'sequelize';

import { dbSequelize } from "../../config/db.conf.js";
import Deduction from '../../models/paie/deduction.mdl.js';

export const registerDeduction = async (req, res, next) => {
    try {
        const { montant, libelle, agentId } = req.body;

        const deduction = await Deduction.create({ montant, libelle, agentId });

        const createdDeduction = await Deduction.findByPk(deduction.id, { include: 'agent' });
        res.status(201).json({ data: createdDeduction });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getDeductionPerAgent = async (req, res, next) => {
    try {
        const { agentId } = req.params;
        const { mounth } = req.query;

        const deduction = await dbSequelize.query(`SELECT sum(montant) AS total FROM deductions WHERE (agentId = '${agentId}' AND createdAt LIKE '${mounth}%')`, { type: QueryTypes.SELECT });

        res.status(200).json({ data: deduction });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getDeductionsPerAgentCateg = async (req, res, next) => {
    try {
        const { agentId, libelle } = req.params;
        const { mounth } = req.query;

        const primes = await dbSequelize.query(`SELECT sum(montant) AS total FROM deductions WHERE (agentId = '${agentId}' AND createdAt LIKE '${mounth}%' AND libelle = '${libelle}')`, { type: QueryTypes.SELECT });

        res.status(200).json({ data: primes });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};