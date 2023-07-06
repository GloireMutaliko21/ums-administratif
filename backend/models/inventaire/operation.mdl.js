import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Operation = dbSequelize.define('operation', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    typeOp: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    libelle: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    quantite: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    dateOp: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
});

export default Operation;