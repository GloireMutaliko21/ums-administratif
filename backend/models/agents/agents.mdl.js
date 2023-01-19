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
        allowNull: false,
        unique: 'matricule'
    },
    nom: {
        type: Sequelize.STRING,
        allowNull: false
    },
    postnom: {
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
    },
    username: {
        type: Sequelize.STRING,
        unique: 'username',
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        defaultValue: '123456'
    },
    imageUrl: Sequelize.STRING,
    privilege: {
        type: Sequelize.STRING,
        allowNull: false,
        // defaultValue: 'standard'
    }

});

export default Agent;