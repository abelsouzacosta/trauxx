import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetDetailsOfAProductUseCase } from "./GetDetailsOfAProductUseCase";

class GetDetailsOfAProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getDetailsOfAProductUseCase = container.resolve(
      GetDetailsOfAProductUseCase
    );

    const product = await getDetailsOfAProductUseCase.execute(parseInt(id, 10));

    return response.status(200).json(product);
  }
}

export { GetDetailsOfAProductController };
