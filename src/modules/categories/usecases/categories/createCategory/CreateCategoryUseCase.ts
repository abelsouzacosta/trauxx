import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "src/modules/categories/repositories/categories/ICategoryRepository";
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

    if (categoryAlreadyExists) throw new Error("Category already exists");

    this.repository.create({ name, image });
  }
}

export { CreateCategoryUseCase };
