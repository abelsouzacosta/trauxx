import { ApplicationError } from "src/shared/errors/ApplicationError";
import { inject, injectable } from "tsyringe";

import {
  IProductRepository,
  ICreateProductDTO,
} from "../../../repositories/products/IProductRepository";

@injectable()
class CreateProductUseCase {
  private repository: IProductRepository;

  constructor(
    @inject("ProductRepository")
    repository: IProductRepository
  ) {
    this.repository = repository;
  }

  async execute({ name, image, category_id }: ICreateProductDTO) {
    const nameAlreadyTaken = await this.repository.findByName(name);

    if (nameAlreadyTaken) throw new ApplicationError("Name already taken", 409);

    await this.repository.create({ name, image, category_id });
  }
}

export { CreateProductUseCase };
