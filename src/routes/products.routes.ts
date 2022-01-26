import { Router } from "express";
import { CreateProductController } from "src/modules/products/usecases/products/createProduct/CreateProductController";
import { DeleteProductController } from "src/modules/products/usecases/products/deleteProduct/DeleteProductController";
import { GetDetailsOfAProductController } from "src/modules/products/usecases/products/getDetailsOfAProduct/GetDetailsOfAProductController";
import { ListProductsController } from "src/modules/products/usecases/products/listProducts/ListProductsController";
import { UpdateProductController } from "src/modules/products/usecases/products/updateProduct/UpdateProductController";
import isAuthenticated from "src/shared/middlewares/AuthenticationMiddleware";

const productRouter = Router();
const create = new CreateProductController();
const list = new ListProductsController();
const details = new GetDetailsOfAProductController();
const update = new UpdateProductController();
const delete_product = new DeleteProductController();

productRouter.use(isAuthenticated);

productRouter.get("/", list.handle);

productRouter.get("/:id", details.handle);

productRouter.post("/", create.handle);

productRouter.put("/:id", update.handle);

productRouter.delete("/:id", delete_product.handle);

export { productRouter };
