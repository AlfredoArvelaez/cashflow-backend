import { NextFunction, Request, Response } from 'express'

export const attachUserIdMiddleware = (req: Request, res: Response, next: NextFunction) => {
  req.userId = 2
  next()
}
