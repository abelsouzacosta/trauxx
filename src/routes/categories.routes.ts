import { Router } from "express";
import { CreateCategoryController } from "src/modules/categories/usecases/categories/createCategory/CreateCategoryController";
import { DeleteCategoryController } from "src/modules/categories/usecases/categories/deleteCategory/DeleteCategoryController";
import { ListCategoriesController } from "src/modules/categories/usecases/categories/listCategories/ListCategoriesController";

const categoryRouter = Router();

const create = new CreateCategoryController();
const list = new ListCategoriesController();
const delete_category = new DeleteCategoryController();

categoryRouter.get("/", list.handle);

categoryRouter.post("/", create.handle);

categoryRouter.delete("/:id", delete_category.handle);

export { categoryRouter };
