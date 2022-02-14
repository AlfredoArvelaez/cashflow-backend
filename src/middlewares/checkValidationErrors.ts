import { BadRequestError } from '@core/errors/BadRequestError'
import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'

export const checkValidationErrors = (req: Request, res: Response, next: NextFunction) => {
  const result = validationResult(req)
  if (!result.isEmpty()) {
    const firstError = result.array()[0].msg
    throw new BadRequestError(firstError)
  }
  next()
}
