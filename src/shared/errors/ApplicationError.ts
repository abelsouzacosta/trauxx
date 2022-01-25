class ApplicationError {
  private readonly message: string;
  private readonly statusCode: number;

  constructor(message: string, status: number) {
    Object.assign(this, { message, status });
  }
}

export { ApplicationError };
