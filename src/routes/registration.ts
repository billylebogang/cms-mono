import { RequestHandler, Request, Response, Router, NextFunction} from "express"
import { nextTick } from "process";
import { where } from "sequelize";
import {user} from '../helpers/databaseHelpers'
import { farmerType } from "../models/interfaces"
import { Farmer, Motswana} from "../models/models"



//declaring the registration router 
const registrationRouter = Router();



const addNewFarmerToDb = async ( newFarmer: farmerType ): Promise<boolean> => {

    try {
        const addedFarmer = await Farmer.create(newFarmer) 
        return true
    } catch (error) {
       console.error(error)
       return false
    } 
}



const getEmailAndNumberFromStaging = ( omang:number) => {

    const emailAndNumber = {
        email: "email@example.com",
        number: "72122334"
    }

    return emailAndNumber;
}


const authMidWare: RequestHandler = ( req: Request, res: Response, next: NextFunction): void => {

    if( req.body.otp == 123 ){
        next()
    }else{
        res.sendStatus(401)
    }
    
}


const handleOTPResponse: RequestHandler = (req: Request, res: Response) => {
   
    const otp = req.body.otp;
    //confirm otp

    return res.status(200).json({ name:'farmer here'})

}

//creating a user, inserting into the database
const createFarmer: RequestHandler = async (req: Request, res: Response) => {

    try {
        const newFarmer = await Farmer.create({...req.body})
        res.status(200).send("successfully created")
    } catch (error) {
        console.error(error)
        res.status(500).send("error creating new farmer")
    }

}

const handleOmang: RequestHandler = async (req: Request, res: Response) => {

    const omangId = req.params.omangid

    try {
        //getting the data from nis
        const motswana = await Motswana.findOne({where: {omang: omangId}})
       // const motswana = await Motswana.findAll()
        res.status(200).json(motswana)
    }
    catch(error){
        console.error(error)
    }
}

//method to retrieve all users from the db
const getFarmer: RequestHandler = async (req: Request, res: Response) => {

    const primaryKey = req.params.id

    try {
        const singleFarmer = await Farmer.findByPk(primaryKey)

        if (singleFarmer === null) {
            return res.status(404).send("not found")
        } else {

            console.log(singleFarmer);
            return res.status(200).json( singleFarmer )
        }
    } catch (error) {
        console.error(error)
        return res.status(400).send(error)
    }
    
}

//method to retrieve all users from the db
const getFarmers: RequestHandler = async (req: Request, res: Response) => {


    try {
        const allFarmers = await Farmer.findAll()
        return res.status(200).json(allFarmers)
    } catch (error) {
        console.error(error)
        return res.status(400).send(error)
    }
    
}
//method to update the user details
const updateFarmer: RequestHandler = async (req: Request, res: Response) => {}

//method to delete a user

//method not allowed to be used on request that are not allowed 
 //TODO: later move to helpers when including other routers
const methodNotAllowed: RequestHandler = (req: Request, res: Response) => {
    res.status(405).send('method not allowed')
}


//router definition with its method calling
registrationRouter
    .get('/:id',getFarmer)
    .get('/omang/:omangid',handleOmang)
    .get('/',getFarmers)
    .post('/',authMidWare, createFarmer) //post for omang number
    .post('/otp/', handleOTPResponse) //post for otp 
    .put('/:id',updateFarmer)
    .delete('/', methodNotAllowed )


//export the router to be used on the main server file
export {registrationRouter}
