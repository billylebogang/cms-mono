import { sequelize } from "../helpers/databaseHelpers";
import { DataTypes } from 'sequelize'


//the user sequalize model to be use to insert in to the db
//TODO: add other the fileds for the cms
export const User = sequelize.define('user', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
},
{
    tableName: 'users',
});