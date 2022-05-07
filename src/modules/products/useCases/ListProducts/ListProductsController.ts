import { container } from "tsyringe";
import { Request, Response, NextFunction } from "express";
import { ListProductsUseCase } from "./ListProductsUseCase";
import { AppError } from "../../../../errors/AppError";

class ListProductsController {
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        const listProductsUseCase = container.resolve(ListProductsUseCase);

        const authenticationHeader = request.headers.authorization;

        return await listProductsUseCase.execute(authenticationHeader)
            .then((products) => {
                if (products instanceof AppError) {
                    next(products)
                }
                return response.status(200).json(products);
            }).catch((error) => error)
    }
}

export { ListProductsController } 