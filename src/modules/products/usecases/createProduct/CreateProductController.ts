import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, image, category_id } = request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    await createProductUseCase.execute({ name, image, category_id });

    return response.status(201).send();
  }
}

export { CreateProductController };
