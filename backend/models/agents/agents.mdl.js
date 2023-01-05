import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Agent = dbSequelize.define('agent', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
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