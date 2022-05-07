import { container, injectable } from "tsyringe";
import { Request, Response, NextFunction } from "express"; 
import { CreateUserUseCase } from "./CreateUserUseCase";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserController {
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        const { name, email, password } = request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);
        return await createUserUseCase.execute({ name, email, password })
            .then((user) => {
                if (user instanceof AppError) {
                    next(user)
                }
                return response.status(200).json(user);
            }).catch((error) => error)
        
    }
}

export { CreateUserController }