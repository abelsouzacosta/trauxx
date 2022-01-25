import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import {
  ICategoryRepository,
  ICreateCategoryDTO,
  IUpdateCategoryDTO,
} from "../categories/ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async findById(id: number): Promise<Category | undefined> {
    const category = await this.repository.findOne({
      where: {
        id,
      },
    });

    return category;
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = await this.repository.findOne({
      where: {
        name,
      },
    });

    return category;
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }

  async listProductsOfACategory(id: number): Promise<Category | undefined> {
    const category = await this.repository.findOne({
      where: {
        id,
      },
      relations: ["products"],
    });

    return category;
  }

  async create({ name, image }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      image,
    });

    await this.repository.save(category);
  }

  async update({ id, name, image }: IUpdateCategoryDTO): Promise<void> {
    const category = await this.findById(id);

    if (category) {
      category.name = name;
      category.image = image;
      await this.repository.save(category);
    }
  }

  async delete(id: number): Promise<void> {
    const category = await this.findById(id);

    if (category) {
      await this.repository.remove(category);
    }
  }
}

export { CategoryRepository };
