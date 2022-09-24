import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {registrationRouter} from './routes/registration'
import {connect} from './helpers/databaseHelpers'
import { options} from './swagger/swagger'

const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')



const app: Express = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//swagger use
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(options) )

//to be able to use the env variables
dotenv.config();

//port that ther server will be running at
const port= process.env.PORT || 3030;

//database connection
//TODO: make a variable you can use to check for connection before database operations, boolean variables
connect()

//handling the home request
app.get('/', (res: Response, req: Request) => {
  res.send('welcome to home');
})

//use the registration router
app.use('/users', registrationRouter)

// server listening
//TODO: set port env variables for production p
app.listen(port , () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
