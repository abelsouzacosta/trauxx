import { Router } from "express";

import { categoryRouter } from "./categories.routes";
import { productRouter } from "./products.routes";

const router = Router();

router.use("/categories", categoryRouter);

router.use("/products", productRouter);

export { router };
