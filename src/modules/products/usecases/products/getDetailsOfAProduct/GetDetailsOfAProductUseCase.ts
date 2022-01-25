import { ApplicationError } from "src/shared/errors/ApplicationError";
import { inject, injectable } from "tsyringe";

import { Product } from "../../../entities/Product";
import { IProductRepository } from "../../../repositories/products/IProductRepository";

@injectable()
class GetDetailsOfAProductUseCase {
  private repository: IProductRepository;

  constructor(
    @inject("ProductRepository")
    repository: IProductRepository
  ) {
    this.repository = repository;
  }

  async execute(id: number): Promise<Product | undefined> {
    const productExists = await this.repository.findById(id);

    if (!productExists) throw new ApplicationError("Product not found", 404);

    const product = await this.repository.getProductDetails(id);

    return product;
  }
}

export { GetDetailsOfAProductUseCase };
