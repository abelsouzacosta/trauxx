import { getRepository, Repository } from "typeorm";

import { Product } from "../../entities/Product";
import {
  ICreateProductDTO,
  IProductRepository,
  IUpdateProductDTO,
} from "../products/IProductRepository";

class ProductRepository implements IProductRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async findByName(name: string): Promise<Product | undefined> {
    const product = await this.repository.findOne({
      where: {
        name,
      },
    });

    return product;
  }

  async findById(id: number): Promise<Product | undefined> {
    const product = await this.repository.findOne({
      where: {
        id,
      },
    });

    return product;
  }

  async findByCategory(category_id: number): Promise<Product[]> {
    const products = await this.repository.find({
      where: {
        category_id,
      },
    });

    return products;
  }

  async create({ name, image, category_id }: ICreateProductDTO): Promise<void> {
    const product = this.repository.create({
      name,
      image,
      category_id,
    });

    await this.repository.save(product);
  }

  async list(): Promise<Product[]> {
    const products = await this.repository.find();

    return products;
  }

  async delete(id: number): Promise<void> {
    const product = await this.findById(id);

    if (product) {
      await this.repository.remove(product);
    }
  }

  async update({
    id,
    name,
    image,
    category_id,
  }: IUpdateProductDTO): Promise<void> {
    const product = await this.findById(id);

    if (product) {
      product.name = name;
      product.image = image;
      product.category_id = category_id;

      await this.repository.save(product);
    }
  }
}

export { ProductRepository };
