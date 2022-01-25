import { ICategoryRepository } from "src/modules/categories/repositories/categories/ICategoryRepository";
import { ApplicationError } from "src/shared/errors/ApplicationError";
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

    if (!categoryExists) throw new ApplicationError("Category not found", 404);

    await this.repository.delete(id);
  }
}

export { DeleteCategoryUseCase };
