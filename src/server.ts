import "reflect-metadata";
import express from "express";

import "./database";

const app = express();

app.use(express.json());

app.get("/", (req, res) =>
  res.status(200).json({
    message: "Olá mundo",
  })
);

const PORT = 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
