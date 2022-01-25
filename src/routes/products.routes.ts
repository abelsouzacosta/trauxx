import { Router } from "express";
import { CreateProductController } from "src/modules/products/usecases/createProduct/CreateProductController";
import { ListProductsController } from "src/modules/products/usecases/listProducts/ListProductsController";

const productRouter = Router();
const create = new CreateProductController();
const list = new ListProductsController();

productRouter.get("/", list.handle);

productRouter.post("/", create.handle);

export { productRouter };
