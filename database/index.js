import sequelize from "./db-postgres.js";
// import sequelize from "./db-mysql.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import User from "./models/user-model.js";
import ExpenseCategory from "./models/expense-category-model.js";
import Expense from "./models/expense-model.js";
import ExpenseType from "./models/expense-type-model.js";
import Income from "./models/income-model.js";
import IncomeType from "./models/income-type-model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


let models = {
}

//connect to db and sync models
const syncModels = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        await sequelize.sync({ force: true });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

// return all models in an object

fs.readdirSync(__dirname + "/models")
    .filter((file) => file.indexOf(".") !== 0 && file !== "index.js")
    .forEach(async (file) => {
        const model = await import (path.join(__dirname, "/models", file));
        models[model.default.name] = model.default;
    });


// create associations between models
Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

export { syncModels, sequelize, User, ExpenseCategory, Expense, ExpenseType, Income, IncomeType};

