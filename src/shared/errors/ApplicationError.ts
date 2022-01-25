class ApplicationError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, status: number) {
    Object.assign(this, { message, statusCode: status });
  }
}

export { ApplicationError };
