import { NextFunction, Request, Response  } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { User } from "../modules/users/entities/User";

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction ) {
    const authenticationHeader: any = request.headers.authorization;
    
    if(!authenticationHeader) {
        const error = new AppError("Token missing.", 401);
        next(error)
    }

    try {
        const secretKey: any = process.env.JWT_SECRET_KEY

        const { sub: user_id } = verify(authenticationHeader, secretKey);
        
        if({ sub: user_id }){
            next()
        }
    } catch {
        next(new AppError("Invalid token"))
    }
}