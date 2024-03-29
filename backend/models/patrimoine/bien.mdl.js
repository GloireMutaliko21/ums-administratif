import { Sequelize, DataTypes } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Bien = dbSequelize.define('bien', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    libelle: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    valDepart: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    duree: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    valNetComptable: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    dateAmort: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    service: {
        type: Sequelize.STRING,
        defaultValue: 'Institution'
    }
});

export default Bien;