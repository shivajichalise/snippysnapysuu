import express from "express"
import { body } from "express-validator"
import { checkJwt } from "../middlewares/authMiddleware"
import { getAllCollections, store } from "../controllers/collectionController"

const router = express.Router()

router.post(
    "/",
    [checkJwt],
    [body("name").trim().notEmpty().withMessage("Name field is required.")],
    store
)

router.get("/", [checkJwt], getAllCollections)

export default router
