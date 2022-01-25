import {
  ICategoryRepository,
  IUpdateCategoryDTO,
} from "src/modules/categories/repositories/categories/ICategoryRepository";
import { ApplicationError } from "src/shared/errors/ApplicationError";
import { injectable, inject } from "tsyringe";

@injectable()
class UpdateCategoryUseCase {
  private repository: ICategoryRepository;

  constructor(
    @inject("CategoryRepository")
    repository: ICategoryRepository
  ) {
    this.repository = repository;
  }

  async execute({ id, name, image }: IUpdateCategoryDTO): Promise<void> {
    const categoryFound = await this.repository.findById(id);
    const categoryFoundByName = await this.repository.findByName(name);

    if (!categoryFound) throw new ApplicationError("Category not found", 404);

    if (categoryFoundByName && categoryFound.id !== categoryFoundByName.id)
      throw new ApplicationError("Name already taken", 409);

    await this.repository.update({ id, name, image });
  }
}

export { UpdateCategoryUseCase };
