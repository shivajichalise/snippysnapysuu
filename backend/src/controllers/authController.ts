import { emailExists, findByEmail } from "./userController"
import {success, error} from '../utils/httpResponses'
import bcrypt from "bcryptjs"
import User from "../models/User"
import sql from "../config/db"
import { v4 as uuidv4 } from 'uuid';
import {Request, Response} from 'express'
import { ValidationError, validationResult } from "express-validator"
import HttpResponsesParams from "../types/HttpResponsesParams"
import generateToken from "../utils/generateToken"

// WRITE TESTS

// @desc    Register a user
// @route   Post /api/auth/register
// @access  Public
export async function registerUser(req: Request, res: Response) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const validationErrorParams: HttpResponsesParams<ValidationError[]> = {
            res: res,
            data: result.array(),
            message: "Validation failed.",
            code: 403
        }
        return error(validationErrorParams);
    }

    const {name, email, password} = req.body

    const userExists = await emailExists(email)

    if(userExists){
        const errorParams: HttpResponsesParams<[]> = {
            res: res,
            data: [],
            message: "User with email already exists.",
            code: 409
        }
        return error(errorParams);
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword: string = await bcrypt.hash(password, salt)

    const user = await sql<User[]>`
        INSERT INTO users (id, name, email, password)
        VALUES (${uuidv4()}, ${name}, ${email}, ${hashedPassword})
        RETURNING id, name, email
        `

    if(user.length > 0){
        const token = generateToken(user[0].id)
        const successParams: HttpResponsesParams<{user: User, token: string}> = {
            res: res,
            data: {user: user[0], token: token},
            message: "Account created successfully.",
            code: 200
        }
        return success(successParams)
    }

    const errorParams: HttpResponsesParams<[]> = {
        res: res,
        data: [],
        message: "Account creation failed.",
        code: 500
    }
    return error(errorParams)
}

// @desc    Login a user
// @route   Post /api/auth/login
// @access  Public
export async function loginUser(req: Request, res: Response) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const validationErrorParams: HttpResponsesParams<ValidationError[]> = {
            res: res,
            data: result.array(),
            message: "Validation failed.",
            code: 403
        }
        return error(validationErrorParams);
    }

    const {email, password} = req.body

    const userExists = await emailExists(email)

    if(!userExists){
        const userDoesntExistErrorParams: HttpResponsesParams<[]> = {
            res: res,
            data: [],
            message: "Invalid credentials.",
            code: 403
        }
        return error(userDoesntExistErrorParams);
    }

    let user = await findByEmail(email)

    if(user){
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(isPasswordValid){

            const token = generateToken(user.id)
            
            const successParams: HttpResponsesParams<{user: User, token: string}> = {
                res: res,
                data: {user: user, token: token},
                message: "Logged in successfully.",
                code: 200
            }
            return success(successParams)
        }

        const credentialsErrorParams: HttpResponsesParams<[]> = {
            res: res,
            data: [],
            message: "Invalid credentials.",
            code: 403
        }

        return error(credentialsErrorParams);
    }
}

// @desc    Logout a user
// @route   Post /api/auth/logout
// @access  Protected
export async function logoutUser(_: Request, res: Response) {
    const successParams: HttpResponsesParams<[]> = {
        res: res,
        data: [],
        message: "Logged out successfully.",
        code: 200
    }
    return success(successParams)
}
