import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Commande = dbSequelize.define('commande', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantite: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

export default Commande;