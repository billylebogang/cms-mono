import { RequestHandler, Request, Response, Router, response} from "express"
import {user} from '../helpers/databaseHelpers'
import { farmerType } from "../models/interfaces"
import { Farmer } from "../models/models"



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


const generateOTP = () => {

    const num: number = 123;

    return num
}

const getEmailAndNumberFromStaging = ( omang:number) => {

    const emailAndNumber = {
        email: "email@example.com",
        number: "72122334"
    }

    return emailAndNumber;
}


const handleOTPResponse: RequestHandler = (req: Request, res: Response) => {
   
    const otp = req.body.otp;
    //confirm otp

    return res.status(200).json({ name:'farmer here'})

}

 

//creating a user, inserting into the database
const createFarmer: RequestHandler = async (req: Request, res: Response) => {}

//method to retrieve all users from the db
const getFarmer: RequestHandler = async (req: Request, res: Response) => {

    const primaryKey = req.params.id

    try {
        const singleFarmer = await Farmer.findByPk(primaryKey)
        return res.status(200).json(singleFarmer)
    } catch (error) {
        console.error(error)
        return res.status(400).send("Invalid ID")
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
    .get( '/:id',getFarmer)
    .post('/', createFarmer) //post for omang number
    .post('/otp/', handleOTPResponse) //post for otp 
    .put('/:id',updateFarmer)
    .delete('/', methodNotAllowed )


//export the router to be used on the main server file
export {registrationRouter}
