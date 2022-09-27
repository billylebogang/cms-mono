"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motswana = exports.Farmer = exports.User = void 0;
const databaseHelpers_1 = require("../helpers/databaseHelpers");
const sequelize_1 = require("sequelize");
//the user sequalize model to be use to insert in to the db
//TODO: add other the fileds for the cms
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
//the farmer sequalize model to be use to add new farmer in to the db
exports.Farmer = databaseHelpers_1.sequelize.define('farmer', {
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    farmerType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    individualName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    individualOmang: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    individualGender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    individualPlaeOfBirth: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    individualDateOfBirth: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    individualExpiryDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    companyName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    companyType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    coDirectors: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    coOwnership: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    companyRegistrationDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    farmId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    leaseNumber: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    tableName: 'farmers'
});
exports.Motswana = databaseHelpers_1.sequelize.define('motswana', {
    omang: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    DOB: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cell_number: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    omang_exp_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    middleName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'staging'
});
