import { Router } from "express";

import { categoryRouter } from "./categories.routes";

const router = Router();

router.use("/categories", categoryRouter);

export { router };
