import express from "express"
import { body } from "express-validator"
import { checkJwt } from "../middlewares/authMiddleware"
import {
    destroy,
    getAllSnippets,
    store,
} from "../controllers/snippetController"

const router = express.Router()

router.post(
    "/",
    [checkJwt],
    [body("title").trim().notEmpty().withMessage("Title field is required.")],
    [
        body("description")
            .trim()
            .notEmpty()
            .withMessage("Description field is required."),
    ],
    [body("tags").isArray({ min: 0 }).withMessage("Tags are required.")],
    [
        body("language")
            .trim()
            .notEmpty()
            .withMessage("Language field is required."),
    ],
    [body("code").trim().notEmpty().withMessage("Code is required.")],
    [body("code_description").trim().optional({ nullable: true })],
    store
)

router.get("/", [checkJwt], getAllSnippets)

router.delete("/:id", [checkJwt], destroy)

export default router
