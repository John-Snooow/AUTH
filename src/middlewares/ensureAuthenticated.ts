import { Request, Response, NextFunction } from "express"
import test from "node:test"

function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization

    if (!authHeader) {
        throw new Error("JWT token não informado") 
    }

    const [, token] = authHeader.split(" ")

    console.log(test)

    return next()
}

export { ensureAuthenticated }