import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { ICreateUserDTO, IUserRepository } from "../users/IUserRepository";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  async findById(id: number): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
    });

    await this.repository.save(user);
  }
}

export { UserRepository };
