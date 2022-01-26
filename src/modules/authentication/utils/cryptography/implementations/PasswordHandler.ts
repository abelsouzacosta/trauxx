import { hash, compare } from "bcrypt";

import { IPasswordHandler } from "../password/IPasswordHandler";

class PasswordHandler implements IPasswordHandler {
  async passwordHash(password: string, salt: number): Promise<string> {
    const hashedPassword = await hash(password, salt);

    return hashedPassword;
  }

  async passwordCompare(password: string, hash: string): Promise<boolean> {
    const passwordIsValid = await compare(password, hash);

    return passwordIsValid;
  }
}

export { PasswordHandler };
