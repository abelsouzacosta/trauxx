import { Router } from "express";
import { CreateCategoryController } from "src/modules/categories/usecases/categories/createCategory/CreateCategoryController";
import { ListCategoriesController } from "src/modules/categories/usecases/categories/listCategories/ListCategoriesController";

const categoryRouter = Router();

const create = new CreateCategoryController();
const list = new ListCategoriesController();

categoryRouter.get("/", list.handle);

categoryRouter.post("/", create.handle);

export { categoryRouter };
