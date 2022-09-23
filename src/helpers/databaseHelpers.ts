import { hostname } from 'os';
import {Sequelize} from 'sequelize'


export const user: string = "hello from the internet";

//for connection to db

const databaseName: string = "sql11521819"
const username: string = "sql11521819"
const myHostname: string = "sql11.freesqldatabase.com"
const port: number = 3306
const password: string = "TJAJlmspEa"

export const  sequelize: Sequelize = new Sequelize( databaseName, username, password,{
    dialect:'mysql',
    host: myHostname,
});

export const connect = async() : Promise<boolean> => {

    try {
        await sequelize.authenticate()
        console.log('connection is on')
        return true
    } catch (errors) {
        console.error(errors+ ' could not connect')
        return false;
        
    }

}