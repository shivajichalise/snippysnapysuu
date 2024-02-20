import { emailExists } from "./userController"
import {success, error} from '../utils/httpResponses'
import bcrypt from "bcryptjs"
import User from "../models/User"
import sql from "../config/db"
import { v4 as uuidv4 } from 'uuid';
import {Request, Response} from 'express'
import { ValidationError, validationResult } from "express-validator"
import HttpResponsesParams from "../types/HttpResponsesParams"

// WRITE TESTS

// @desc    Register a user
// @route   Post /api/auth/register
// @access  Public
export async function registerUser(req: Request, res: Response) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        const validationErrorParams: HttpResponsesParams<Record<string, ValidationError>> = {
            res: res,
            data: result.mapped(),
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
        const successParams: HttpResponsesParams<{user: User}> = {
            res: res,
            data: {user: user[0]},
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
