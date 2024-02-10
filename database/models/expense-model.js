import { sequelize } from "../index.js";
import { DataTypes } from "sequelize";
import ExpenseType from "./expense-type-model.js";
import ExpenseCategory from "./expense-category-model.js";


const Expense = sequelize.define("Expense", {
    // Model attributes are defined here
    // expenseId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true,
    // },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    // foreign key to expenseType
    expenseTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE
        // allowNull defaults to true
    },
    updatedAt: {
        type: DataTypes.DATE
        // allowNull defaults to true
    }
}, {
    // Other model options go here
});


Expense.belongsTo(ExpenseType, { as: "expenseType" ,foreignKey: "expenseTypeId" });
Expense.belongsTo(ExpenseCategory, { as: "expenseCategory" ,foreignKey: "category" })

export default Expense;

// write object to create table in database

