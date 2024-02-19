import express from "express"
import { registerUser } from "../controllers/authController"

const router = express.Router()

router.route('/register').post(registerUser)

router.route('/login').get((req, res) => {
    res.json('register')
})

router.route('/login').get((req, res) => {
    res.json('register')
})

export default router
