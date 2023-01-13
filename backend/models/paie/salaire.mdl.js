import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Salaire = dbSequelize.define('salaire', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    mois: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    salaires: {
        type: Sequelize.JSON,
        allowNull: false
    },
    heureSupp: {
        type: Sequelize.JSON,
        allowNull: false
    },
    ferie: {
        type: Sequelize.JSON,
        allowNull: false
    },
    conge: {
        type: Sequelize.JSON,
        allowNull: false
    },
    prime: {
        type: Sequelize.JSON,
        allowNull: false
    },
    maladie: {
        type: Sequelize.JSON,
        allowNull: false
    },
    deduction: {
        type: Sequelize.JSON,
        allowNull: false
    },
    allocation: {
        type: Sequelize.JSON,
        allowNull: false
    },
});

export default Salaire;