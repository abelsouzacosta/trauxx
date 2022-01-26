import { sign } from "jsonwebtoken";
import { User } from "src/modules/authentication/entities/User";
import { IUserRepository } from "src/modules/authentication/repositories/users/IUserRepository";
import { IPasswordHandler } from "src/modules/authentication/utils/cryptography/password/IPasswordHandler";
import { ApplicationError } from "src/shared/errors/ApplicationError";
import { inject, injectable } from "tsyringe";

import authConfig from "../../../../../shared/config/auth";

interface ISession {
  user: User;
  token: string;
}

@injectable()
class CreateSessionUseCase {
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

  async execute(email: string, password: string): Promise<ISession> {
    const user = await this.repository.findByEmail(email);

    if (!user) throw new ApplicationError("User not found", 404);

    const validPassword = await this.passwordHandler.passwordCompare(
      password,
      user.password
    );

    if (!validPassword) throw new ApplicationError("Incorrect Password", 401);

    // converte para string
    const stringId = user.id.toString();

    const token = sign({}, authConfig.jwt.secret, {
      expiresIn: 86400,
      subject: stringId,
    });

    return {
      user,
      token,
    };
  }
}

export { CreateSessionUseCase };
