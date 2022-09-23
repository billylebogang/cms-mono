"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const databaseHelpers_1 = require("../helpers/databaseHelpers");
const sequelize_1 = require("sequelize");
exports.User = databaseHelpers_1.sequelize.define('user', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users',
});