import { NextFunction, Request, Response } from 'express'
import { InvalidTokenError } from '../core/errors'
import { AuthHeaderNotSentError } from '../core/errors/AuthHeaderNotSentError'
import { verifyToken } from '../utils/jwt'

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  try {
    if (!authHeader) throw new AuthHeaderNotSentError()

    const [authSchema, token] = authHeader.split(' ')

    if (!token || authSchema !== 'Bearer') throw new InvalidTokenError()

    const { data } = await verifyToken(token)

    req.userId = data.userId

    next()
  } catch (err) {
    next(err)
  }
}
