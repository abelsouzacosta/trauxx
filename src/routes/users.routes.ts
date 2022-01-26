import { Router } from "express";
import { CreateUserController } from "src/modules/authentication/usecases/users/createUser/CreateUserController";

const userRouter = Router();
const create = new CreateUserController();

userRouter.post("/", create.handle);

export { userRouter };
