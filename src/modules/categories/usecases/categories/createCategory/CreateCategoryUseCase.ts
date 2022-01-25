import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "src/modules/categories/repositories/categories/ICategoryRepository";
import { ApplicationError } from "src/shared/errors/ApplicationError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateCategoryUseCase {
  private repository: ICategoryRepository;

  constructor(
    @inject("CategoryRepository")
    repository: ICategoryRepository
  ) {
    this.repository = repository;
  }

  async execute({ name, image }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.repository.findByName(name);

    if (categoryAlreadyExists)
      throw new ApplicationError("Category already exists", 409);

    this.repository.create({ name, image });
  }
}

export { CreateCategoryUseCase };
