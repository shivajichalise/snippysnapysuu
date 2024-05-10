import sql from "../config/db"
import { Request, Response } from "express"
import { ValidationError, validationResult } from "express-validator"
import HttpResponsesParams from "../types/HttpResponsesParams"
import { success, error } from "../utils/httpResponses"
import Tag from "../models/Tag"
import Code from "../models/Code"
import { v4 as uuidv4 } from "uuid"
import jwt from "jsonwebtoken"
import getCurrentUserId from "../utils/getCurrentUserId"
import TagForOption from "../models/TagForOption"

// @desc    Find tag by id
// @route   Post /api/tags/:id
// @access  Public
export function find(id: string) {
    const tag = sql`SELECT * FROM tags WHERE id = ${id}`
    return tag
}

// @desc    Fetch all tags by current user
// @route   GET /api/tags
// @access  Private
export async function getAllTags(req: Request, res: Response) {
    const user_id = getCurrentUserId(req)
    const optionParam = req.query.option

    const tags = await sql<Tag[]>`SELECT 
            * 
        FROM 
            tags
        WHERE 
            tags.user_id = ${user_id}`

    if (optionParam && optionParam.toString().toLowerCase() === "true") {
        const tagOptions = tags.map((tag) => ({
            value: tag.id,
            label: tag.name,
        }))

        const successParams: HttpResponsesParams<{
            tags: TagForOption[]
        }> = {
            res: res,
            data: { tags: tagOptions },
            message: "Tags fetched successfully.",
            code: 200,
        }
        return success(successParams)
    }

    const successParams: HttpResponsesParams<{
        tags: Tag[]
    }> = {
        res: res,
        data: { tags: tags },
        message: "Tags fetched successfully.",
        code: 200,
    }
    return success(successParams)
}

// @desc    Store a tag
// @route   Post /api/tags
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

    const { name } = req.body
    const user_id = getCurrentUserId(req)

    const tag = await sql<Tag[]>`
        INSERT INTO tags (id, user_id, name)
        VALUES (${uuidv4()}, ${user_id}, ${name})
        RETURNING *
        `
    if (tag.length > 0) {
        const successParams: HttpResponsesParams<{
            tag: Tag
        }> = {
            res: res,
            data: { tag: tag[0] },
            message: "Tag created successfully.",
            code: 200,
        }
        return success(successParams)
    }

    const errorParams: HttpResponsesParams<[]> = {
        res: res,
        data: [],
        message: "Tag creation failed.",
        code: 500,
    }
    return error(errorParams)
}
