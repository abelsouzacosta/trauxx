import {
  ICreateUserDTO,
  IUserRepository,
} from "src/modules/authentication/repositories/users/IUserRepository";
import { IPasswordHandler } from "src/modules/authentication/utils/cryptography/password/IPasswordHandler";
import { ApplicationError } from "src/shared/errors/ApplicationError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateUserUseCase {
  private repository: IUserRepository;
  private passwordHandler: IPasswordHandler;

  constructor(
    @inject("UserRepository")
    repository: IUserRepository,
    @inject("PasswordHandler")
    passwordHandler: IPasswordHandler
  ) {
    this.repository = repository;
    this.passwordHandler = passwordHandler;
  }

  async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
    const emailAlreadyTaken = await this.repository.findByEmail(email);

    if (emailAlreadyTaken)
      throw new ApplicationError("Email already taken", 409);

    const hashedPassword = await this.passwordHandler.passwordHash(password, 8);

    this.repository.create({
      name,
      email,
      password: hashedPassword,
    });
  }
}

export { CreateUserUseCase };
