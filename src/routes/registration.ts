import { RequestHandler, Request, Response, Router} from "express"
import {user} from '../helpers/databaseHelpers'
import { userType } from "../models/interfaces"
import { User } from "../models/models"



//declaring the registration router 
const registrationRouter = Router();


//creating a user, inserting into the database
const createUser: RequestHandler = async (req: Request, res: Response) => {

    return res.status(200).send(user)
}

//method to retrieve all users from the db
const getUsers: RequestHandler = async (req: Request, res: Response) => {
    await User.sync({alter: true})
    const allUsers = await User.findAll()
    console.log(allUsers)
    return res.status(200).json(allUsers)
}
//method to update the user details
const updateUser: RequestHandler = async (req: Request, res: Response) => {

    let newUser: userType = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }
    const creatingNewUser = await User.create(newUser)
    return res.status(200).send('success')
}

//method to delete a user
const deleteUser: RequestHandler = (req: Request, res: Response) => {

    return res.status(200).send(user)
}

//method not allowed to be used on request that are not allowed 
 //TODO: later move to helpers when including other routers
const methodNotAllowed: RequestHandler = (req: Request, res: Response) => {
    res.status(405).send('method not allowed')
}


//router definition with its method calling
registrationRouter
    .get( '/',getUsers)
    .post('/', createUser)
    .put('/',methodNotAllowed)
    .delete('/', methodNotAllowed )


//export the router to be used on the main server file
export {registrationRouter}
