import "reflect-metadata";
import express from "express";

import "./database";
import "./shared/container";

import { router } from "./routes";

const app = express();

app.get("/", (req, res) =>
  res.status(200).json({
    message: "Olá mundo",
  })
);

app.use(express.json());
app.use(router);

const PORT = 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
