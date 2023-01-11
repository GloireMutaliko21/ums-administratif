import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Allocation = dbSequelize.define('allocation', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nbEnfant: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    jours: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    taux: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
});

export default Allocation;