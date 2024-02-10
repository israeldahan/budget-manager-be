import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "postgres",
    }
);

export default sequelize;