import { Category } from "../../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  image: string;
}

interface IUpdateCategoryDTO extends ICreateCategoryDTO {
  id: number;
}

interface ICategoryRepository {
  findByName(name: string): Promise<Category | undefined>;

  findById(id: number): Promise<Category | undefined>;

  list(): Promise<Category[]>;

  listProductsOfACategory(id: number): Promise<Category | undefined>;

  create({ name, image }: ICreateCategoryDTO): Promise<void>;

  update({ id, name, image }: IUpdateCategoryDTO): Promise<void>;

  delete(id: number): Promise<void>;
}

export { ICategoryRepository, ICreateCategoryDTO, IUpdateCategoryDTO };
