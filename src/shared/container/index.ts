import { ICategoryRepository } from "src/modules/categories/repositories/categories/ICategoryRepository";
import { CategoryRepository } from "src/modules/categories/repositories/implementations/CategoryRepository";
import { ProductRepository } from "src/modules/products/repositories/implementations/ProductRepository";
import { IProductRepository } from "src/modules/products/repositories/products/IProductRepository";
import { container } from "tsyringe";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository
);
