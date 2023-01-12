import { QueryTypes } from 'sequelize';

import { dbSequelize } from "../../config/db.conf.js";
import Prime from '../../models/paie/primes.mdl.js';

export const registerPrime = async (req, res, next) => {
    try {
        const { montant, libelle, agentId } = req.body;

        const prime = await Prime.create({ montant, libelle, agentId });

        const createdPrime = await Prime.findByPk(prime.id, { include: 'agent' });
        res.status(201).json({ data: createdPrime });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getPrimesPerAgent = async (req, res, next) => {
    try {
        const { agentId } = req.params;
        const { mounth } = req.query;

        const primes = await dbSequelize.query(`SELECT sum(montant) AS total FROM primes WHERE (agentId = '${agentId}' AND createdAt LIKE '${mounth}%')`, { type: QueryTypes.SELECT });

        res.status(200).json({ data: primes });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getPrimesPerAgentCateg = async (req, res, next) => {
    try {
        const { agentId, libelle } = req.params;
        const { mounth } = req.query;

        const primes = await dbSequelize.query(`SELECT sum(montant) AS total FROM primes WHERE (agentId = '${agentId}' AND createdAt LIKE '${mounth}%' AND libelle = '${libelle}')`, { type: QueryTypes.SELECT });

        res.status(200).json({ data: primes });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};