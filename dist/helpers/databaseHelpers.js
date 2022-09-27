"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.sequelize = exports.user = void 0;
const sequelize_1 = require("sequelize");
const models_1 = require("../models/models");
exports.user = "hello from the internet";
//for storing of database coonection 
const databaseName = "sql11521819";
const username = "sql11521819";
const myHostname = "sql11.freesqldatabase.com";
const port = 3306;
const password = "TJAJlmspEa";
//variable for database connection
exports.sequelize = new sequelize_1.Sequelize(databaseName, username, password, {
    dialect: 'mysql',
    host: myHostname,
});
//function for establishing the connection to the database
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //trying the connection
        yield exports.sequelize.authenticate();
        models_1.Farmer.sync();
        models_1.Motswana.sync();
        console.log('connection is on');
        //return true if db is connected
        return true;
    }
    catch (errors) {
        //log out the error when occurred 
        console.error(errors + ' could not connect');
        return false;
    }
});
exports.connect = connect;
