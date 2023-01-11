import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Ferie = dbSequelize.define('ferie', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    taux: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
});

export default Ferie;