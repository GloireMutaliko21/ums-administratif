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

// export const getDeductionPerAgent = async (req, res, next) => {
//     try {
//         const { agentId } = req.params;
//         const { mounth } = req.query;

//         const maladAcc = await dbSequelize.query(`SELECT sum(jours * taux) AS total FROM maladAccs WHERE (agentId = '${agentId}' AND createdAt LIKE '${mounth}%')`, { type: QueryTypes.SELECT });

//         res.status(200).json({ data: maladAcc });

//     } catch (err) {
//         const error = new Error(err);
//         res.status(500);
//         return next(error);
//     }
// };