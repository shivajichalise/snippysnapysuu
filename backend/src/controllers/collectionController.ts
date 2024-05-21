import sql from "../config/db"
import { Request, Response } from "express"
import { ValidationError, validationResult } from "express-validator"
import HttpResponsesParams from "../types/HttpResponsesParams"
import { success, error } from "../utils/httpResponses"
import Collection from "../models/Collection"
import { v4 as uuidv4 } from "uuid"
import getCurrentUserId from "../utils/getCurrentUserId"

// @desc    Find collection by id
// @route   Post /api/collections/:id
// @access  Public
export function find(id: string) {
    const collection = sql`SELECT * FROM collections WHERE id = ${id}`
    return collection
}

// @desc    Fetch all collections by current user
// @route   GET /api/collections
// @access  Private
export async function getAllCollections(req: Request, res: Response) {
    const user_id = getCurrentUserId(req)

    const collections = await sql<Collection[]>`
        SELECT * FROM 
            collections
        WHERE 
            collections.user_id = ${user_id}`

    const successParams: HttpResponsesParams<{
        collections: Collection[]
    }> = {
        res: res,
        data: { collections: collections },
        message: "Collections fetched successfully.",
        code: 200,
    }
    return success(successParams)
}

// @desc    Store a collection
// @route   Post /api/collection
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

    const collection = await sql<Collection[]>`
        INSERT INTO collections (id, user_id, name)
        VALUES (${uuidv4()}, ${user_id}, ${name})
        RETURNING *
        `
    if (collection.length > 0) {
        const successParams: HttpResponsesParams<{
            collection: Collection
        }> = {
            res: res,
            data: { collection: collection[0] },
            message: "Collection created successfully.",
            code: 200,
        }
        return success(successParams)
    }

    const errorParams: HttpResponsesParams<[]> = {
        res: res,
        data: [],
        message: "Collection creation failed.",
        code: 500,
    }
    return error(errorParams)
}

// @desc    Delete a collection
// @route   DELETE /api/collection
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

    const collections = await sql<
        Collection[]
    >`SELECT user_id FROM collections WHERE id = ${id}`

    if (collections.length > 0) {
        const collection = collections[0]
        if (user_id === collection.user_id) {
            await sql`DELETE from collections WHERE id = ${id};`

            const successParams: HttpResponsesParams<{}> = {
                res: res,
                data: {},
                message: "Collection deleted successfully.",
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
        message: "Collection not found.",
        code: 404,
    }
    return error(errorParams)
}
