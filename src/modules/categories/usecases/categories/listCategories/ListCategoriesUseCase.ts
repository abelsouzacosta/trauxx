import { Category } from "src/modules/categories/entities/Category";
import { ICategoryRepository } from "src/modules/categories/repositories/categories/ICategoryRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCategoriesUseCase {
  private repository: ICategoryRepository;

  constructor(
    @inject("CategoryRepository")
    repository: ICategoryRepository
  ) {
    this.repository = repository;
  }

  async execute(): Promise<Category[]> {
    const categories = await this.repository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
