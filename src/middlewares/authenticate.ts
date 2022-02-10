import { NextFunction, Request, Response } from 'express'
import { InvalidTokenError } from '../core/errors'
import { verifyToken } from '../utils/jwt'

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization

  try {
    if (!token) {
      throw new InvalidTokenError()
    }

    const { data } = await verifyToken(token)
    console.log(data.userId)

    req.userId = data.userId

    next()
  } catch (err) {
    next(err)
  }
}
