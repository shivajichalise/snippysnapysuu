import { emailExists } from "./userController"
import {success, error} from '../utils/httpResponses'
import bcrypt from "bcryptjs"
import User from "../models/User"
import sql from "../config/db"
import { v4 as uuidv4 } from 'uuid';
import {Request, Response} from 'express'

// @desc    Register a user
// @route   Post /api/users/
// @access  Public
export async function registerUser(req: Request, res: Response) {
    const {name, email, password} = req.body

    const userExists: boolean = await emailExists(email)

    if(userExists){
        error(res, [], 'User with email already exists!', 409)
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword: string = await bcrypt.hash(password, salt)

    const userObj: User = {
        id: uuidv4(),
        name: name,
        email: email,
        password: hashedPassword
    }

    const user = await sql`INSERT INTO users ${ sql(userObj) }`

    if(user){
        success(res, [user], 'User created successfully!', 200)
    }else{
        error(res, [], 'Error creating user!', 500)
    }
}
