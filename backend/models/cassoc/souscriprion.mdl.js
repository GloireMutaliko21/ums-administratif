import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Souscription = dbSequelize.define('souscription', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    montant: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

export default Souscription;