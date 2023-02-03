import { Op, QueryTypes } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const NOW = new Date();

export const createPresence = async () => {
    try {

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};