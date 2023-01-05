import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Grades = dbSequelize.define('grade', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titre: Sequelize.STRING
});

export default Grades;