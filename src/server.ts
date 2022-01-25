import "reflect-metadata";
import express from "express";
import "express-async-errors";

import { router } from "./routes";
import errorHandler from "./shared/middlewares/MiddlewareError";

import "./database";
import "./shared/container";

const app = express();

app.get("/", (req, res) =>
  res.status(200).json({
    message: "Olá mundo",
  })
);

app.use(express.json());
app.use(router);
app.use(errorHandler);

const PORT = 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
