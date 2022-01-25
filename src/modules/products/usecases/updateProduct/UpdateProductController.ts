import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProductUseCase } from "./UpdateProductUseCase";

class UpdateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, image, category_id } = request.body;

    const updateProductUseCase = container.resolve(UpdateProductUseCase);

    await updateProductUseCase.execute({
      id: parseInt(id, 10),
      name,
      image,
      category_id,
    });

    return response.status(200).send();
  }
}

export { UpdateProductController };
