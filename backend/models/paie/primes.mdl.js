import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Prime = dbSequelize.define('prime', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    montant: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    libelle: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default Prime;