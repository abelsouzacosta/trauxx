import { ApplicationError } from "src/shared/errors/ApplicationError";
import { inject, injectable } from "tsyringe";

import { IProductRepository } from "../../repositories/products/IProductRepository";

@injectable()
class DeleteProductUseCase {
  private repository: IProductRepository;

  constructor(
    @inject("ProductRepository")
    repository: IProductRepository
  ) {
    this.repository = repository;
  }

  async execute(id: number): Promise<void> {
    const productExists = await this.repository.findById(id);

    if (!productExists) throw new ApplicationError("Product not found", 404);

    await this.repository.delete(id);
  }
}

export { DeleteProductUseCase };
