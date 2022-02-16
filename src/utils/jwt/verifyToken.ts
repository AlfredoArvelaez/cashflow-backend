import jwt from 'jsonwebtoken'
import { UnauthorizedError } from '@core/errors'

export const verifyToken = (token: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
      if (err) return reject(new UnauthorizedError('Invalid Token'))
      resolve(decoded)
    })
  })
}
