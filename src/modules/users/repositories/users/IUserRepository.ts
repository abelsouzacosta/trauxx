import { User } from "../../entities/User";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUserRepository {
  findById(id: number): Promise<User | undefined>;

  findByEmail(email: string): Promise<User | undefined>;

  create({ name, email, password }: ICreateUserDTO): Promise<void>;
}

export { IUserRepository, ICreateUserDTO };
