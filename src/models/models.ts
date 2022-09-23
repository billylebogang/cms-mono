import { sequelize } from "../helpers/databaseHelpers";
import { Sequelize , DataTypes } from 'sequelize'


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