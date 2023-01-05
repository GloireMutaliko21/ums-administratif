import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Agent = dbSequelize.define('agent', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    matricule: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nom: {
        type: Sequelize.STRING,
        allowNull: false
    },
    postNom: {
        type: Sequelize.STRING,
        allowNull: false
    },
    prenom: Sequelize.STRING,
    sexe: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    statut: {
        type: Sequelize.STRING,
        allowNull: false
    },
    permanence: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

export default Agent;