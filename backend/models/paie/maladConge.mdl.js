import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const MaladConge = dbSequelize.define('maladConge', {
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
    libelle: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default MaladConge;