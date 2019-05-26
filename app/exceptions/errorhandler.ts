import { NextFunction, Request, Response } from 'express';
import HttpException from './httpexception';

export default function ErrorHandler(err: HttpException, req: Request, res: Response, next: NextFunction) {
  const status = err.status || 500;
  const message = err.message || 'Sorry, something went wrong';
  res
    .status(status)
    .send({
      message,
      status
    });
}