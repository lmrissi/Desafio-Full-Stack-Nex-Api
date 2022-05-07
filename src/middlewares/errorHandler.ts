import { NextFunction, Request, Response  } from "express";
import { AppError } from "../errors/AppError"

export async function errorHandler(error: Error, request: Request, response: Response, next: NextFunction) {
    if(error instanceof AppError){
        return response.status(400).json(error.message)
    }

    return response.status(500).json(error)
}