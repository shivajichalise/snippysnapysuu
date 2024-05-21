import express from "express"
import { body } from "express-validator"
import { checkJwt } from "../middlewares/authMiddleware"
import { getAllTags, store, destroy } from "../controllers/tagController"

const router = express.Router()

router.post(
    "/",
    [checkJwt],
    [body("name").trim().notEmpty().withMessage("Name field is required.")],
    store
)

router.get("/", [checkJwt], getAllTags)

router.delete("/:id", [checkJwt], destroy)

export default router
