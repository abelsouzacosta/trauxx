import { Router } from "express";
import { CreateCategoryController } from "src/modules/categories/usecases/categories/createCategory/CreateCategoryController";
import { DeleteCategoryController } from "src/modules/categories/usecases/categories/deleteCategory/DeleteCategoryController";
import { ListCategoriesController } from "src/modules/categories/usecases/categories/listCategories/ListCategoriesController";
import { ListProductsOfACategoryController } from "src/modules/categories/usecases/categories/listProductsOfACategory/ListProductsOfACategoryController";
import { UpdateCategoryController } from "src/modules/categories/usecases/categories/updateCategory/UpdateCategoryController";
import isAuthenticated from "src/shared/middlewares/AuthenticationMiddleware";

const categoryRouter = Router();

const create = new CreateCategoryController();
const list = new ListCategoriesController();
const listProducts = new ListProductsOfACategoryController();
const update = new UpdateCategoryController();
const delete_category = new DeleteCategoryController();

categoryRouter.use(isAuthenticated);

categoryRouter.get("/", list.handle);

categoryRouter.get("/:id", listProducts.handle);

categoryRouter.post("/", create.handle);

categoryRouter.put("/:id", update.handle);

categoryRouter.delete("/:id", delete_category.handle);

export { categoryRouter };
