import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Deduction = dbSequelize.define('deduction', {
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

export default Deduction;