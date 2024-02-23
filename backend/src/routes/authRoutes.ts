import express from "express"
import { loginUser, registerUser, logoutUser } from "../controllers/authController"
import { body, checkSchema } from "express-validator"
import { checkJwt } from "../middlewares/authMiddleware"

const router = express.Router()

router.post('/register', 
    [
        body('name').trim().notEmpty().withMessage("Name field is required."),
        body('email').trim().isEmail().withMessage("Email is not valid."),
        body('password').isLength({ min: 8 }).withMessage("Password has to be min 8 characters."),
        body('password_confirmation').custom((value, { req }) => {
            return value === req.body.password;
        }).withMessage("Passwords do not match."),
    ],
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
