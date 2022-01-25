import { Router } from "express";
import { CreateProductController } from "src/modules/products/usecases/createProduct/CreateProductController";

const productRouter = Router();
const create = new CreateProductController();

productRouter.post("/", create.handle);

export { productRouter };
