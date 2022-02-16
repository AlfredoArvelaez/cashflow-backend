import { NextFunction, Request, Response } from 'express'
import { UnauthorizedError, BadRequestError } from '@core/errors'
import { verifyToken } from 'utils/jwt'

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  try {
    if (!authHeader) throw new BadRequestError('Authorization header not sent')

    const [authSchema, token] = authHeader.split(' ')

    if (!token || authSchema !== 'Bearer') throw new UnauthorizedError('Invalid token')

    const { data } = await verifyToken(token)

    req.userId = data.userId

    next()
  } catch (err) {
    next(err)
  }
}
