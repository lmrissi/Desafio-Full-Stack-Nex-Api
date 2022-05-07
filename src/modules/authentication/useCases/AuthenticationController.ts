import { container } from "tsyringe";
import { Request, Response, NextFunction } from "express";
import { AuthenticationUseCase } from "./AuthenticationUseCase";
import { AppError } from "../../../errors/AppError";

class AuthenticationController {
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        const { name, password } = request.body;
        const authenticationUseCase = container.resolve(AuthenticationUseCase);
        return await authenticationUseCase.execute( { name, password } )
            .then((authResponse) =>{
                if (authResponse instanceof AppError) {
                    next(authResponse)
                }
                return response.status(200).json(authResponse);
            }).catch((error) => error)
    }
}

export { AuthenticationController }