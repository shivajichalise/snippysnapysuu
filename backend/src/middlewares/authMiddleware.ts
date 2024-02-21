import { verify, JwtPayload } from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express'
import { error } from "../utils/httpResponses"
import HttpResponsesParams from "../types/HttpResponsesParams"

export interface CustomRequest extends Request {
    token: JwtPayload;
}

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt;
    
    let jwtPayload;

    try {
        jwtPayload = <any>verify(token, process.env.JWT_SECRET!);
        (req as CustomRequest).token = jwtPayload;
    } catch (err) {
        const validationErrorParams: HttpResponsesParams<[]> = {
            res: res,
            data: [],
            message: "Not authorized.",
            code: 401
        }
        return error(validationErrorParams);
    }
    next();
}
