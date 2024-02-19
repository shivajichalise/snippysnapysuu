import { Response } from "express"

export function success(res: Response, data: [] | [any], message: string|null = null, code: number = 200) {
    res.status(code).json({
        status: 'Request was successful.',
        message: message,
        data: data
    });
}

export function error(res: Response, data: [] | [any], message: string|null = null, code: number) {
    res.status(code).json({
        status: 'Error has occurred.',
        message: message,
        data: data
    });
}
