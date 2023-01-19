import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const CategArticle = dbSequelize.define('categArtcle', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    libelle: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default CategArticle;