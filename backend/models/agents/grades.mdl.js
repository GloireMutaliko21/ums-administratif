import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Grades = dbSequelize.define('grade', {
    id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    titre: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default Grades;