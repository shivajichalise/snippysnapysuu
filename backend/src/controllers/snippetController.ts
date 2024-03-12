import sql from "../config/db"
import { Request, Response } from "express"
import { ValidationError, validationResult } from "express-validator"
import HttpResponsesParams from "../types/HttpResponsesParams"
import { success, error } from "../utils/httpResponses"
import Snippet from "../models/Snippet"
import Code from "../models/Code"
import { v4 as uuidv4 } from "uuid"

// @desc    Find snippet by id
// @route   Post /api/snippets/:id
// @access  Public
export function find(id: string) {
    const snippet = sql`SELECT * FROM snippets WHERE id = ${id}`
    return snippet
}

// @desc    Store a snippet
// @route   Post /api/snippets
// @access  Private
export async function store(req: Request, res: Response) {
    const result = validationResult(req)
    if (!result.isEmpty()) {
        const validationErrorParams: HttpResponsesParams<ValidationError[]> = {
            res: res,
            data: result.array(),
            message: "Validation failed.",
            code: 403,
        }
        return error(validationErrorParams)
    }

    const { title, description, tags, language, code, code_description } =
        req.body

    const snippet = await sql<Snippet[]>`
        INSERT INTO snippets (id, title, description, tags, favourite)
        VALUES (${uuidv4()}, ${title}, ${description}, ${tags}, ${false})
        RETURNING *
        `
    if (snippet.length > 0) {
        const insertedCode = await sql<Code[]>`
        INSERT INTO codes (id, snippet_id, language, description, code)
        VALUES (${uuidv4()}, ${snippet[0].id}, ${language}, ${code_description}, ${code})
        RETURNING *
        `

        if (insertedCode.length > 0) {
            const successParams: HttpResponsesParams<{
                snippet: Snippet
                code: Code
            }> = {
                res: res,
                data: { snippet: snippet[0], code: code[0] },
                message: "Snippet created successfully.",
                code: 200,
            }
            return success(successParams)
        }
    }

    const errorParams: HttpResponsesParams<[]> = {
        res: res,
        data: [],
        message: "Snippet creation failed.",
        code: 500,
    }
    return error(errorParams)
}
