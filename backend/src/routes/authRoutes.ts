import express from "express"

const router = express.Router()

router.route('/register').get((req, res) => {
    res.json('register')
})

router.route('/login').get((req, res) => {
    res.json('register')
})

router.route('/login').get((req, res) => {
    res.json('register')
})

export default router
