import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const RemunConge = dbSequelize.define('remunconge', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
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

export default RemunConge;