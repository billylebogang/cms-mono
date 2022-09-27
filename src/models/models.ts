import { sequelize } from "../helpers/databaseHelpers";
import { DataTypes } from 'sequelize'
import { type } from "os";


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


//the farmer sequalize model to be use to add new farmer in to the db

export const Farmer = sequelize.define('farmer', {
    userId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false
    },
    farmerType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    individualName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    individualOmang: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    individualGender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    individualPlaeOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    individualDateOfBirth: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    individualExpiryDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    companyType: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    coDirectors: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    coOwnership: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    companyRegistrationDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    farmId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    leaseNumber:{
        type: DataTypes.INTEGER,
        allowNull: true,
    }


},
{
    tableName: 'farmers'
}

)


export const Motswana = sequelize.define('motswana', {

    omang: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    firstname: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DOB: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    cell_number:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    omang_exp_date:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    middleName:{
        type: DataTypes.STRING,
        allowNull: false,
    }

},
{
    tableName:'staging'
})

