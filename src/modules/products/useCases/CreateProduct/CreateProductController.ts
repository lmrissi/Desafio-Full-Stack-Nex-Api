import { container, injectable } from "tsyringe";
import { Request, Response, NextFunction } from "express"; 
import { CreateProductUseCase } from "./CreateProductUseCase";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateProductController {
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        const { name, description, price } = request.body;

        const authenticationHeader = request.headers.authorization;

        const createProductUseCase = container.resolve(CreateProductUseCase);

        return await createProductUseCase.execute({ name, description, price, authenticationHeader })
            .then((product) => {
                if (product instanceof AppError) {
                    next(product)
                }
                return response.status(200).json(product);
            }).catch((error) => error)
    }
}

export { CreateProductController }