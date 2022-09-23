"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const registration_1 = require("./routes/registration");
const databaseHelpers_1 = require("./helpers/databaseHelpers");
const bodyParser = require('body-parser');
const app = (0, express_1.default)();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
dotenv_1.default.config();
const port = process.env.PORT;
(0, databaseHelpers_1.connect)();
app.get('/', (res, req) => {
    res.send('welcome to home');
});
app.use('/users', registration_1.registrationRouter);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
