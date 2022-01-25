import { ICategoryRepository } from "src/modules/categories/repositories/categories/ICategoryRepository";
import { ApplicationError } from "src/shared/errors/ApplicationError";
import { inject, injectable } from "tsyringe";

import {
  IProductRepository,
  IUpdateProductDTO,
} from "../../repositories/products/IProductRepository";

@injectable()
class UpdateProductUseCase {
  private repository: IProductRepository;
  private categoryRepository: ICategoryRepository;

  constructor(
    @inject("ProductRepository")
    repository: IProductRepository,
    @inject("CategoryRepository")
    categoryRepository: ICategoryRepository
  ) {
    this.repository = repository;
    this.categoryRepository = categoryRepository;
  }

  async execute({
    id,
    name,
    image,
    category_id,
  }: IUpdateProductDTO): Promise<void> {
    const productExists = await this.repository.findById(id);

    if (!productExists) throw new ApplicationError("Product not found", 404);

    if (category_id) {
      const categoryExists = await this.categoryRepository.findById(
        category_id
      );

      if (!categoryExists)
        throw new ApplicationError("Category not found", 409);
    }

    await this.repository.update({ id, name, image, category_id });
  }
}

export { UpdateProductUseCase };
