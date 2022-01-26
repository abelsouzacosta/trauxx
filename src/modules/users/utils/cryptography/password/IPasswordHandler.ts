interface IPasswordHandler {
  passwordHash(password: string, salt: number): Promise<string>;

  passwordCompare(password: string, hash: string): Promise<boolean>;
}

export { IPasswordHandler };
