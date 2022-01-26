import { Router } from "express";

import { categoryRouter } from "./categories.routes";
import { productRouter } from "./products.routes";
import { userRouter } from "./users.routes";

const router = Router();

router.use("/categories", categoryRouter);

router.use("/products", productRouter);

router.use("/users", userRouter);

export { router };
