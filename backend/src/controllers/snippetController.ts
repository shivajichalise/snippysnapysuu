import sql from "../config/db"
import { Request, Response } from "express"
import { ValidationError, validationResult } from "express-validator"
import HttpResponsesParams from "../types/HttpResponsesParams"
import { success, error } from "../utils/httpResponses"
import Snippet from "../models/Snippet"
import Code from "../models/Code"
import { v4 as uuidv4 } from "uuid"
import jwt from "jsonwebtoken"
import SnippetTag from "../models/SnippetTag"
import getCurrentUserId from "../utils/getCurrentUserId"

// @desc    Find snippet by id
// @route   Post /api/snippets/:id
// @access  Public
export function find(id: string) {
    const snippet = sql`SELECT * FROM snippets WHERE id = ${id}`
    return snippet
}

// @desc    Fetch all snippets by current user
// @route   GET /api/snippets
// @access  Private
export async function getAllSnippets(req: Request, res: Response) {
    const authHeader = req.headers["authorization"]
    const token = authHeader ? authHeader.split(" ")[1] : ""
    const decodedToken = jwt.decode(token) as { id?: string } // Type assertion
    const user_id = decodedToken?.id || null // Optional chaining

    const snippets = await sql<Snippet[]>`SELECT 
            snippets.*, 
            JSON_AGG(codes.*) AS snippets,
            JSON_AGG(collections.name) AS collections,
            JSON_AGG(tags.name) AS tags
        FROM 
            snippets
        LEFT JOIN 
            codes ON snippets.id = codes.snippet_id
        LEFT JOIN 
            collections ON snippets.collection_id = collections.id
        LEFT JOIN 
            snippet_tags ON snippets.id = snippet_tags.snippet_id
        LEFT JOIN 
            tags ON snippet_tags.tag_id = tags.id
        WHERE 
            snippets.user_id = ${user_id}
        GROUP BY 
            snippets.id`

    const successParams: HttpResponsesParams<{
        snippets: Snippet[]
    }> = {
        res: res,
        data: { snippets: snippets },
        message: "Snippet fetched successfully.",
        code: 200,
    }
    return success(successParams)
}

// @desc    Store a snippet
// @route   Post /api/snippets
// @access  Private
export async function store(req: Request, res: Response) {
    const result = validationResult(req)
    const user_id = getCurrentUserId(req)
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
        INSERT INTO snippets (id, user_id, title, description, favourite)
        VALUES (${uuidv4()}, ${user_id}, ${title}, ${description}, ${false})
        RETURNING *
        `
    if (snippet.length > 0) {
        const insertedCode = await sql<Code[]>`
        INSERT INTO codes (id, snippet_id, language, description, code)
        VALUES (${uuidv4()}, ${snippet[0].id}, ${language}, ${code_description}, ${code})
        RETURNING *
        `

        if (insertedCode.length > 0) {
            for (let i = 0; i < tags.length; i++) {
                await sql<SnippetTag[]>`
                    INSERT INTO snippet_tags (snippet_id, tag_id)
                    VALUES (${snippet[0].id}, ${tags[i]})
                    RETURNING *
                    `
            }

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

// @desc    Delete a tag
// @route   DELETE /api/tag
// @access  Private
export async function destroy(req: Request, res: Response) {
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

    const id = req.params.id
    const user_id = getCurrentUserId(req)

    const snippets = await sql<
        Snippet[]
    >`SELECT user_id FROM snippets WHERE id = ${id}`

    if (snippets.length > 0) {
        const snippet = snippets[0]
        if (user_id === snippet.user_id) {
            await sql`DELETE from snippets WHERE id = ${id};`

            const successParams: HttpResponsesParams<{}> = {
                res: res,
                data: {},
                message: "Snippet deleted successfully.",
                code: 200,
            }
            return success(successParams)
        } else {
            const errorParams: HttpResponsesParams<[]> = {
                res: res,
                data: [],
                message: "Not authorized.",
                code: 401,
            }
            return error(errorParams)
        }
    }

    const errorParams: HttpResponsesParams<[]> = {
        res: res,
        data: [],
        message: "Snippet not found.",
        code: 404,
    }
    return error(errorParams)
}
