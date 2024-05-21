import express from "express"
import { body } from "express-validator"
import { checkJwt } from "../middlewares/authMiddleware"
import {
    destroy,
    getAllCollections,
    store,
} from "../controllers/collectionController"

const router = express.Router()

router.post(
    "/",
    [checkJwt],
    [body("name").trim().notEmpty().withMessage("Name field is required.")],
    store
)

router.get("/", [checkJwt], getAllCollections)

router.delete("/:id", [checkJwt], destroy)

export default router
