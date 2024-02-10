import { sequelize } from "../index.js";
import { DataTypes, literal } from "sequelize";
import jwt from "jsonwebtoken";
// import { UUIDV4 } from "uuid";
const User = sequelize.define("User", {
    // Model attributes are defined here
    // userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true,
    // },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        // allowNull defaults to true
    },
    address: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    phone: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    password: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    token: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    role: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    status: {
        type: DataTypes.ENUM("active", "inactive")
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

User.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
}

User.prototype.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
    return jwt.sign({
        email: this.email,
        id: this.id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, process.env.JWT_SECRET);
}

User.prototype.toAuthJSON = function () {
    return {
        id: this.id,
        email: this.email,
        token: this.generateJWT(),
    };
};

export default User;