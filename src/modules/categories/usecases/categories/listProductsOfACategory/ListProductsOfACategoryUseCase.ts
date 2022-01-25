import { Category } from "src/modules/categories/entities/Category";
import { ICategoryRepository } from "src/modules/categories/repositories/categories/ICategoryRepository";
import { ApplicationError } from "src/shared/errors/ApplicationError";
import { inject, injectable } from "tsyringe";

@injectable()
class ListProductsOfACategoryUseCase {
  private repository: ICategoryRepository;

  constructor(
    @inject("CategoryRepository")
    repository: ICategoryRepository
  ) {
    this.repository = repository;
  }

  async execute(id: number): Promise<Category | undefined> {
    const categoryExists = await this.repository.findById(id);

    if (!categoryExists) throw new ApplicationError("Category not found", 404);

    const category = await this.repository.listProductsOfACategory(id);

    return category;
  }
}

export { ListProductsOfACategoryUseCase };
