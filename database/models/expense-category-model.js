import { sequelize } from "../index.js";
import { DataTypes } from "sequelize";

const ExpenseCategory = sequelize.define("ExpenseCategory", {
    // Model attributes are defined here
    // expenseCategoryId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true,
    // },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parentId: {
        type: DataTypes.INTEGER,
        allowNull: true
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

ExpenseCategory.hasMany(ExpenseCategory, { as: "children", foreignKey: "parentId" });
export default ExpenseCategory;