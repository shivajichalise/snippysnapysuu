import express from "express"
import { body } from "express-validator"
import { checkJwt } from "../middlewares/authMiddleware"
import { store } from "../controllers/snippetController"

const router = express.Router()

router.post(
    "/store",
    [checkJwt],
    [body("title").trim().notEmpty().withMessage("Title field is required.")],
    store
)

export default router
