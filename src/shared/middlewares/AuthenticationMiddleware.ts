import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import auth from "../config/auth";
import { ApplicationError } from "../errors/ApplicationError";

interface ITokenPayload {
  sub: string;
  iat: number;
  exp: number;
}

const isAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) throw new ApplicationError("Token not provided", 449);

    const parts = authHeader.split(" ");

    if (parts.length !== 2) throw new ApplicationError("Token mismatch", 449);

    const [bearer, token] = parts;

    if (!/^Bearer$/i.test(bearer))
      throw new ApplicationError("Token malformatted", 449);

    const decodedToken = verify(token, String(auth.jwt.secret));

    const { sub } = decodedToken as ITokenPayload;

    // inserting user's id inside our request object
    request.user = {
      id: sub,
    };

    next();
  } catch (err) {
    throw new ApplicationError(`Unauthorized`, 401);
  }
};

export default isAuthenticated;
