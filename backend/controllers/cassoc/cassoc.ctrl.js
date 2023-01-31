import { Op } from 'sequelize';
import Agent from '../../models/agents/agents.mdl.js';

// import { dbSequelize } from "../../config/db.conf.js";
import Cassoc from '../../models/cassoc/cassoc.mdl.js';
import Souscription from '../../models/cassoc/souscriprion.mdl.js';

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

export const getCassocs = async (req, res, next) => {
    const { privilege, id } = req.user;

    try {
        let cassocs;
        if (privilege === 'direction') {
            cassocs = await Cassoc.findAll({
                where: {
                    datefin: { [Op.gte]: new Date().toISOString().slice(0, 10) },
                    validite: 'inProgress'
                },
                include: [{ model: Agent }, { model: Souscription }]
            });
        } else {
            cassocs = await Cassoc.findAll({
                where: {
                    [Op.or]: [
                        {
                            [Op.and]: [
                                {
                                    datefin: { [Op.gte]: new Date().toISOString().slice(0, 10) }
                                },
                                {
                                    status: 'published'
                                },
                                { validite: 'inProgress' }
                            ]
                        },
                        {
                            agentId: id,
                            validite: 'inProgress'
                        }
                    ]
                },

                include: [{ model: Agent }, { model: Souscription }]
            });
        }
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

export const updateCas = async (req, res, next) => {
    try {
        const { description, datefin } = req.body;
        const { id } = req.params;

        const cassoc = await Cassoc.update({ description, datefin }, { where: { id }, returning: true });

        if (!cassoc) {
            res.status(204).json({ data: 'Aucun cas trouvé' });
            return;
        }
        res.status(201).json({ data: cassoc });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const publishCasSoc = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cassoc = await Cassoc.update({ status: 'published' }, { where: { id }, returning: true });

        if (!cassoc) {
            res.status(204).json({ data: 'Aucun cas trouvé' });
            return;
        }
        res.status(201).json({ data: cassoc });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};
export const closeCasSoc = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cassoc = await Cassoc.update({ validite: 'closed' }, { where: { id }, returning: true });

        if (!cassoc) {
            res.status(204).json({ data: 'Aucun cas trouvé' });
            return;
        }
        res.status(201).json({ data: cassoc });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};