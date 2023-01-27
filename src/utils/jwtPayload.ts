import { IJwtPayload } from '../interfaces/jwtPayloadInterface';
import { Request } from 'express';
import { sign, decode, verify, TokenExpiredError, NotBeforeError, JsonWebTokenError } from 'jsonwebtoken';

import AppError from '../errors';

const getPayload = (req: Request): IJwtPayload => {
  const token = req?.headers?.authorization?.split(' ')[1] ?? '';

  // const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) throw new AppError(400, 'Bad request!!');

  const decoded = decode(token, { complete: true });
  if (!decoded?.payload) throw new AppError(400, 'Bad request!!');

  var payload = decoded?.payload as IJwtPayload;

  return payload;
};

const verifyToken = (req: Request): string => {
  const token = req?.headers?.authorization?.split(' ')[1];
  if (!token) throw new AppError(403, 'A token is required for authentication');

  verify(token, process.env.TOKEN_KEY || '', (err: any, decoded: any) => {
    if (err instanceof TokenExpiredError) throw new AppError(403, 'Unauthorized! Access Token was expired!');
    if (err instanceof NotBeforeError) throw new AppError(403, 'jwt not active');
    if (err instanceof JsonWebTokenError) throw new AppError(403, 'jwt malformed');
  });

  return token;
};

const createToken = (info: IJwtPayload): string => {
  // Create token
  const token = sign(
    { userId: info.userId, email: info.email } as IJwtPayload,
    process.env.TOKEN_KEY || '',
    {
      expiresIn: '2h',
    }
  );

  return token;
}

export { createToken, getPayload, verifyToken };
