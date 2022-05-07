import { Router } from "express";
import { container } from "tsyringe";
import { errorHandler } from "./middlewares/errorHandler";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";

const routes = Router()

const createUserController = container.resolve(CreateUserController);

routes.post("/user", createUserController.handle)
routes.use(errorHandler)

export { routes }