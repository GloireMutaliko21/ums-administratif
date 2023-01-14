import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Task = dbSequelize.define('task', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    priorite: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

export default Task;