import { inject, injectable } from "tsyringe";

import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/products/IProductRepository";

@injectable()
class ListProductsUseCase {
  private repository: IProductRepository;

  constructor(
    @inject("ProductRepository")
    repository: IProductRepository
  ) {
    this.repository = repository;
  }

  async execute(): Promise<Product[]> {
    const products = await this.repository.list();

    return products;
  }
}

export { ListProductsUseCase };
