import { sequelize } from "../index.js";
import { DataTypes } from "sequelize";

const ExpenseType = sequelize.define("ExpenseType", {
    // Model attributes are defined here
    // expenseTypeId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true,
    // },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    properties: {
        type: DataTypes.JSON
        // allowNull defaults to true
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

export default ExpenseType;