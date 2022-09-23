import { RequestHandler, Request, Response, Router} from "express"
import {user} from '../helpers/databaseHelpers'
import { userType } from "../models/interfaces"
import { User } from "../models/models"




const registrationRouter = Router();

const getHome: RequestHandler = (req: Request, res: Response) => {
    return res.status(200).send("Welcome home")
}


const createUser: RequestHandler = async (req: Request, res: Response) => {

    return res.status(200).send(user)
}

const getUsers: RequestHandler = async (req: Request, res: Response) => {
    await User.sync({alter: true})
    const allUsers = await User.findAll()
    console.log(allUsers)
    return res.status(200).json(allUsers)
}

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

const deleteUser: RequestHandler = (req: Request, res: Response) => {

    return res.status(200).send(user)
}

const methodNotAllowed: RequestHandler = (req: Request, res: Response) => {
    res.status(405).send('method not allowed')
}



registrationRouter
    .get( '/',getUsers)
    .post('/', createUser)
    .put('/',methodNotAllowed)
    .delete('/', methodNotAllowed )



export {registrationRouter}
