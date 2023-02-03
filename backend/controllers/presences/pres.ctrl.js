import { Op, QueryTypes } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";
import Presence from '../../models/presences/pres.mdl.js';

export const createPresence = async (req, res, next) => {
    const { agentId, dateNow } = req.body;
    const date = new Date(dateNow);

    let status;

    /*
     Before all, 
     1. Fetch presences and check if the current agentId is not
     already registered for today

     2. fetch congés model and do
     something for each agent which dateFin conge still valid
    */

    try {
        if (8 < date.getHours()) {
            status = 'Retard';
        } else {
            if (date.getMinutes() > 30) status = 'Retard Léger'
            else status = 'Présent'
        }
        const presences = await Presence.findAll({
            where: {
                [Op.and]: {
                    agentId,
                    createdAt: { [Op.startsWith]: date.toISOString().slice(0, 10) }
                }
            }
        });

        if (presences.length > 0) {
            res.status(400).json({ data: 'Agent Déjà pointé', msg: 'Agent Déjà pointé' });
            return;
        }

        const presence = await Presence.create({ status, agentId });
        const createdPresence = await Presence.findByPk(
            presence.id,
            {
                attributes: ['status', 'createdAt'],
                include: 'agent',
            }
        )

        res.status(201).json({ data: createdPresence });
    } catch (err) {
        console.log(err);
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};