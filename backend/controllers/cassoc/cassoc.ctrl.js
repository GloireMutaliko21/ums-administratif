// import { QueryTypes } from 'sequelize';

// import { dbSequelize } from "../../config/db.conf.js";
import Cassoc from '../../models/cassoc/cassoc.mdl.js';

export const createCasSoc = async (req, res, next) => {
    try {
        const { description, datefin } = req.body;
        const { id } = req.user;

        const cassoc = await Cassoc.create({ description, datefin, agentId: id });
        const createdCas = await Cassoc.findByPk(cassoc.id, { include: 'agent' });
        res.status(201).json({ data: createdCas });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};