import { QueryTypes, Op } from 'sequelize';

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

export const getPrivileCas = async (req, res, next) => {
    try {
        const cassocs = await Cassoc.findAll({
            where: {
                datefin: { [Op.gte]: new Date().toISOString().slice(0, 10) }
            }
        });
        if (!cassocs) {
            res.status(404).json({ data: 'Aucun cas trouvé' });
            return;
        }
        res.status(200).json({ data: cassocs });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getCassocs = async (req, res, next) => {
    try {
        const cassocs = await Cassoc.findAll({
            where: {
                [Op.and]: [
                    {
                        datefin: { [Op.gte]: new Date().toISOString().slice(0, 10) }
                    },
                    {
                        status: 'published'
                    }
                ]
            }
        });
        if (!cassocs) {
            res.status(404).json({ data: 'Aucun cas trouvé' });
            return;
        }
        res.status(200).json({ data: cassocs })
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};