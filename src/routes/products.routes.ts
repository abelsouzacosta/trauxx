import { Router } from "express";
import { CreateProductController } from "src/modules/products/usecases/createProduct/CreateProductController";
import { GetDetailsOfAProductController } from "src/modules/products/usecases/getDetailsOfAProduct/GetDetailsOfAProductController";
import { ListProductsController } from "src/modules/products/usecases/listProducts/ListProductsController";

const productRouter = Router();
const create = new CreateProductController();
const list = new ListProductsController();
const details = new GetDetailsOfAProductController();

productRouter.get("/", list.handle);

productRouter.get("/:id", details.handle);

productRouter.post("/", create.handle);

export { productRouter };
