"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const registration_1 = require("./routes/registration");
const databaseHelpers_1 = require("./helpers/databaseHelpers");
const swagger_1 = require("./swagger/swagger");
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const app = (0, express_1.default)();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//swagger use
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger_1.options));
//to be able to use the env variables
dotenv_1.default.config();
//port that ther server will be running at
const port = process.env.PORT || 3030;
//database connection
//TODO: make a variable you can use to check for connection before database operations, boolean variables
(0, databaseHelpers_1.connect)();
//handling the home request
app.get('/', (res, req) => {
    res.send('welcome to home');
});
//use the registration router
app.use('/farmer', registration_1.registrationRouter);
// server listening
//TODO: set port env variables for production p
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
