import { Router } from "express";
import { CreateCategoryController } from "src/modules/categories/usecases/categories/createCategory/CreateCategoryController";

const categoryRouter = Router();

const create = new CreateCategoryController();

categoryRouter.post("/", create.handle);

export { categoryRouter };
