import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Cassoc = dbSequelize.define('casSoc', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    datefin: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: 'nonPublished'
    }
});

export default Cassoc;