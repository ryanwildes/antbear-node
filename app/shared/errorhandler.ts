import { HttpError } from '@app/shared';
import { NextFunction, Request, Response } from 'express';

export class ErrorHandler {
  public handle(err: HttpError, req: Request, res: Response, next: NextFunction) {
    const status = err.status || 500;
    const message = err.message || 'Sorry, something went wrong.';
    console.log(err.message, err.stack);
    res.status(status).json({ status, message });
  }
}