import { ICategoryRepository } from "src/modules/categories/repositories/categories/ICategoryRepository";
import { CategoryRepository } from "src/modules/categories/repositories/implementations/CategoryRepository";
import { container } from "tsyringe";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);
