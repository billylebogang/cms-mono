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
exports.registrationRouter = void 0;
const express_1 = require("express");
const models_1 = require("../models/models");
//declaring the registration router 
const registrationRouter = (0, express_1.Router)();
exports.registrationRouter = registrationRouter;
const addNewFarmerToDb = (newFarmer) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addedFarmer = yield models_1.Farmer.create(newFarmer);
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
const getEmailAndNumberFromStaging = (omang) => {
    const emailAndNumber = {
        email: "email@example.com",
        number: "72122334"
    };
    return emailAndNumber;
};
const authMidWare = (req, res, next) => {
    if (req.body.otp == 123) {
        next();
    }
    else {
        res.sendStatus(401);
    }
};
const handleOTPResponse = (req, res) => {
    const otp = req.body.otp;
    //confirm otp
    return res.status(200).json({ name: 'farmer here' });
};
const authenticateNISMidware = (req, res, next) => {
    const omang = req.body.omangId;
    try {
        //get from stating server
        const singleFarmer = yield models_1.Farmer.findOne({ where: { userId: primaryKey } });
        next();
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error);
    }
};
//creating a user, inserting into the database
const createFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const primaryKey = req.body.id;
});
//method to retrieve all users from the db
const getFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const primaryKey = req.params.id;
    try {
        const singleFarmer = yield models_1.Farmer.findByPk(primaryKey);
        if (singleFarmer === null) {
            return res.status(404).send("not found");
        }
        else {
            console.log("SINGLE FAAAAAAAAAAAAAAAAAAAA", singleFarmer);
            return res.status(200).json(singleFarmer);
        }
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error);
    }
});
//method to retrieve all users from the db
const getFarmers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allFarmers = yield models_1.Farmer.findAll();
        return res.status(200).json(allFarmers);
    }
    catch (error) {
        console.error(error);
        return res.status(400).send(error);
    }
});
//method to update the user details
const updateFarmer = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
//method to delete a user
//method not allowed to be used on request that are not allowed 
//TODO: later move to helpers when including other routers
const methodNotAllowed = (req, res) => {
    res.status(405).send('method not allowed');
};
//router definition with its method calling
registrationRouter
    .get('/:id', getFarmer)
    .get('/', getFarmers)
    .post('/', authMidWare, createFarmer) //post for omang number
    .post('/otp/', handleOTPResponse) //post for otp 
    .put('/:id', updateFarmer)
    .delete('/', methodNotAllowed);
