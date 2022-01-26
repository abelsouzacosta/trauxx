import { UserRepository } from "src/modules/authentication/repositories/implementations/UserRepository";
import { IUserRepository } from "src/modules/authentication/repositories/users/IUserRepository";
import { PasswordHandler } from "src/modules/authentication/utils/cryptography/implementations/PasswordHandler";
import { IPasswordHandler } from "src/modules/authentication/utils/cryptography/password/IPasswordHandler";
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

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IPasswordHandler>(
  "PasswordHandler",
  PasswordHandler
);
