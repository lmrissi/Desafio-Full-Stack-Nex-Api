import { Router } from "express";
import { container } from "tsyringe";
import { errorHandler } from "./middlewares/errorHandler";
import { ensureAuthenticated } from "./middlewares/validateJwtToken";
import { AuthenticationController } from "./modules/authentication/useCases/AuthenticationController";
import { CreateProductController } from "./modules/products/useCases/CreateProduct/CreateProductController";
import { ListProductsController } from "./modules/products/useCases/ListProducts/ListProductsController";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";

const routes = Router()

const createUserController = container.resolve(CreateUserController);
const authenticationController = container.resolve(AuthenticationController)
const createProductController = container.resolve(CreateProductController)
const listProductsController = container.resolve(ListProductsController)

routes.post("/user", createUserController.handle)
routes.post("/login", authenticationController.handle)
routes.use(ensureAuthenticated)
routes.post("/product", createProductController.handle)
routes.get("/products", listProductsController.handle)
routes.use(errorHandler)

export { routes }