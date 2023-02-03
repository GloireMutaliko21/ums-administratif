import { Sequelize } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";

const Presence = dbSequelize.define('presence', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default Presence;