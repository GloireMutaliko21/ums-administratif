import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbpassword = process.env.DB_PWD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_HOST;

export const dbSequelize = new Sequelize(dbName, dbUser, dbpassword, {
    dialect: 'mysql',
    host: dbHost,
    // port: dbPort
});