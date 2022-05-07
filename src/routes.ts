import { Router } from "express";
import { container } from "tsyringe";
import { errorHandler } from "./middlewares/errorHandler";
import { AuthenticationController } from "./modules/authentication/useCases/AuthenticationController";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";

const routes = Router()

const createUserController = container.resolve(CreateUserController);
const authenticationController = container.resolve(AuthenticationController)

routes.post("/user", createUserController.handle)
routes.post("/login", authenticationController.handle)
routes.use(errorHandler)

export { routes }