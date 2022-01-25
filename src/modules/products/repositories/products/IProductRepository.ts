import { Product } from "../../entities/Product";

interface ICreateProductDTO {
  name: string;
  image: string;
  category_id: number;
}

interface IUpdateProductDTO extends ICreateProductDTO {
  id: number;
}

interface IProductRepository {
  findById(id: number): Promise<Product | undefined>;

  findByName(name: string): Promise<Product | undefined>;

  findByCategory(category_id: number): Promise<Product[]>;

  list(): Promise<Product[]>;

  create({ name, image, category_id }: ICreateProductDTO): Promise<void>;

  update({ id, name, image, category_id }: IUpdateProductDTO): Promise<void>;

  delete(id: number): Promise<void>;
}

export { IProductRepository, ICreateProductDTO, IUpdateProductDTO };
