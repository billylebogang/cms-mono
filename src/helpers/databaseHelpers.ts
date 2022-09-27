import { hostname } from 'os';
import {Sequelize} from 'sequelize'
import { Farmer, Motswana } from '../models/models';


export const user: string = "hello from the internet";

//for storing of database coonection 
const databaseName: string = "sql11521819"
const username: string = "sql11521819"
const myHostname: string = "sql11.freesqldatabase.com"
const port: number = 3306
const password: string = "TJAJlmspEa"

//variable for database connection
export const  sequelize: Sequelize = new Sequelize( databaseName, username, password,{
    dialect:'mysql',
    host: myHostname,
});

//function for establishing the connection to the database
export const connect = async() : Promise<boolean> => {

    try {
        //trying the connection
        await sequelize.authenticate()
        Farmer.sync()
        Motswana.sync()
        console.log('connection is on')
        //return true if db is connected
        return true
    } catch (errors) {
        //log out the error when occurred 
        console.error(errors+ ' could not connect')
        return false;
        
    }

}