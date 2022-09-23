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
const databaseHelpers_1 = require("../helpers/databaseHelpers");
const models_1 = require("../models/models");
const registrationRouter = (0, express_1.Router)();
exports.registrationRouter = registrationRouter;
const getHome = (req, res) => {
    return res.status(200).send("Welcome home");
};
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).send(databaseHelpers_1.user);
});
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield models_1.User.sync({ alter: true });
    const allUsers = yield models_1.User.findAll();
    console.log(allUsers);
    return res.status(200).json(allUsers);
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let newUser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    const creatingNewUser = yield models_1.User.create(newUser);
    return res.status(200).send('success');
});
const deleteUser = (req, res) => {
    return res.status(200).send(databaseHelpers_1.user);
};
const methodNotAllowed = (req, res) => {
    res.status(405).send('method not allowed');
};
registrationRouter
    .get('/', getUsers)
    .post('/', createUser)
    .put('/', methodNotAllowed)
    .delete('/', methodNotAllowed);
