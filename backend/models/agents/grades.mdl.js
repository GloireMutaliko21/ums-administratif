import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Grades = dbSequelize.define('grade', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titre: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default Grades;