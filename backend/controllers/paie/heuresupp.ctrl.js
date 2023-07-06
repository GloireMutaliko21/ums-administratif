import { QueryTypes } from 'sequelize';

import { dbSequelize } from "../../config/db.conf.js";
import HeureSupp from "../../models/paie/heuresupp.mdl.js";

export const registerHeureSupp = async (req, res, next) => {
    try {
        const { nombre, taux, agentId } = req.body;

        const heureSupp = await HeureSupp.create({ nombre, taux, agentId });

        //Find This created heuresupp remuneration and send it to front
        const createdHeureSupp = await HeureSupp.findByPk(heureSupp.id, { include: 'agent' });
        res.status(201).json({ data: createdHeureSupp });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getHeureSuppPerAgent = async (req, res, next) => {
    try {
        const { agentId } = req.params;
        const { mounth } = req.query;

        // const heuresSupp = await HeureSupp.findAll({
        //     attributes: [[dbSequelize.fn('SUM', dbSequelize.col('nombre') * dbSequelize.col('taux')), 'Total']],
        //     where: {
        //         [Op.and]: [
        //             { agentId },
        //             { createdAt: { [Op.startsWith]: mounth } }
        //         ]
        //     }
        // });

        const heuresSupp = await dbSequelize.query(`SELECT sum(nombre) as heures, sum(nombre * taux) AS total FROM heureSupps WHERE (agentId = '${agentId}' AND createdAt LIKE '${mounth}%')`, { type: QueryTypes.SELECT });

        res.status(200).json({ data: heuresSupp });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};