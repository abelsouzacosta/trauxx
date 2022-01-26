import { Router } from "express";
import { CreateUserController } from "src/modules/authentication/usecases/users/createUser/CreateUserController";
import { CreateSessionController } from "src/modules/authentication/usecases/users/session/CreateSessionController";

const userRouter = Router();
const create = new CreateUserController();
const session = new CreateSessionController();

userRouter.post("/", create.handle);

userRouter.post("/login", session.handle);

export { userRouter };
