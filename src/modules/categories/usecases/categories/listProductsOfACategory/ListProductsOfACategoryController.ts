import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProductsOfACategoryUseCase } from "./ListProductsOfACategoryUseCase";

class ListProductsOfACategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listProductsOfACategoryUseCase = container.resolve(
      ListProductsOfACategoryUseCase
    );

    const category = await listProductsOfACategoryUseCase.execute(
      parseInt(id, 10)
    );

    return response.status(200).json(category);
  }
}

export { ListProductsOfACategoryController };
