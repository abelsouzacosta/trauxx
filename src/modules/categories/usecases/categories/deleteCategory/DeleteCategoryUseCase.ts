import { ICategoryRepository } from "src/modules/categories/repositories/categories/ICategoryRepository";
import { injectable, inject } from "tsyringe";

@injectable()
class DeleteCategoryUseCase {
  private repository: ICategoryRepository;

  constructor(
    @inject("CategoryRepository")
    repository: ICategoryRepository
  ) {
    this.repository = repository;
  }

  async execute(id: number) {
    const categoryExists = await this.repository.findById(id);

    if (!categoryExists) throw new Error("Category not found");

    await this.repository.delete(id);
  }
}

export { DeleteCategoryUseCase };
