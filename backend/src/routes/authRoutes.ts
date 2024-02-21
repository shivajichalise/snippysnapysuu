import express from "express"
import { loginUser, registerUser, logoutUser } from "../controllers/authController"
import { checkSchema } from "express-validator"
import { checkJwt } from "../middlewares/authMiddleware"

const router = express.Router()

router.post('/register', 
    checkSchema({
        name: {
            notEmpty: true,
            errorMessage: 'Name field is required.',
        },
        email: {
            notEmpty: true,
            errorMessage: 'Invalid email address.',
            isEmail: true,
        },
        password: {
            notEmpty: true,
            isLength: {
                options: { min: 8 },
                errorMessage: 'Password should be at least 8 chars',
            },
            errorMessage: 'Password field is required.',
        },
    }), 
    registerUser
)

router.post('/login',
    checkSchema({
        email: {
            notEmpty: true,
            errorMessage: 'Invalid email address.',
            isEmail: true,
        },
        password: {
            notEmpty: true,
            errorMessage: 'Password field is required.',
        },
    }), 
    loginUser
)

router.post('/logout', 
    [checkJwt], 
    logoutUser
)

export default router