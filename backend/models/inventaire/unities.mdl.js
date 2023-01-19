import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf";

const Unite = dbSequelize.define('unite', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    libelle: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

export default Unite;