import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Article = dbSequelize.define('article', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    designation: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantite: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0
    },
    stockAlerte: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
});

export default Article;