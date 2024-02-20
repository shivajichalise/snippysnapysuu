import express from "express"
import { registerUser } from "../controllers/authController"
import { checkSchema } from "express-validator"

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

router.route('/login').get((req, res) => {
    res.json('register')
})

router.route('/login').get((req, res) => {
    res.json('register')
})

export default router
