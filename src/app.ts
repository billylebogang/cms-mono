import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {registrationRouter} from './routes/registration'
import {connect} from './helpers/databaseHelpers'
const bodyParser = require('body-parser')


const app: Express = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

dotenv.config();


const port= process.env.PORT;

connect()

app.get('/', (res: Response, req: Request) => {
  res.send('welcome to home');
})

app.use('/users', registrationRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
