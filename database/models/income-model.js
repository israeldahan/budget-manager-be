import { sequelize } from "../index.js";
import { DataTypes } from "sequelize";
import incomeType from "./income-type-model.js";

const Income = sequelize.define("Income", {
    // Model attributes are defined here
    // incomeId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true,
    // },
    userId: {
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
    // foreign key to incomeType
    incomeTypeId: {
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

Income.belongsTo(incomeType, { as: "incomeType", foreignKey: "incomeTypeId" });

export default Income;
