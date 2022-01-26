import { ICategoryRepository } from "src/modules/categories/repositories/categories/ICategoryRepository";
import { CategoryRepository } from "src/modules/categories/repositories/implementations/CategoryRepository";
import { ProductRepository } from "src/modules/products/repositories/implementations/ProductRepository";
import { IProductRepository } from "src/modules/products/repositories/products/IProductRepository";
import { UserRepository } from "src/modules/users/repositories/implementations/UserRepository";
import { IUserRepository } from "src/modules/users/repositories/users/IUserRepository";
import { PasswordHandler } from "src/modules/users/utils/cryptography/implementations/PasswordHandler";
import { IPasswordHandler } from "src/modules/users/utils/cryptography/password/IPasswordHandler";
import { container } from "tsyringe";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IPasswordHandler>(
  "PasswordHandler",
  PasswordHandler
);
