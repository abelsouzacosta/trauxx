import { Router } from "express";
import { CreateCategoryController } from "src/modules/categories/usecases/categories/createCategory/CreateCategoryController";
import { DeleteCategoryController } from "src/modules/categories/usecases/categories/deleteCategory/DeleteCategoryController";
import { ListCategoriesController } from "src/modules/categories/usecases/categories/listCategories/ListCategoriesController";
import { UpdateCategoryController } from "src/modules/categories/usecases/categories/updateCategory/UpdateCategoryController";

const categoryRouter = Router();

const create = new CreateCategoryController();
const list = new ListCategoriesController();
const update = new UpdateCategoryController();
const delete_category = new DeleteCategoryController();

categoryRouter.get("/", list.handle);

categoryRouter.post("/", create.handle);

categoryRouter.put("/:id", update.handle);

categoryRouter.delete("/:id", delete_category.handle);

export { categoryRouter };
