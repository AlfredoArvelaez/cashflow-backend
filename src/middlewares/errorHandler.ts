import { NextFunction, Request, Response } from 'express'

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  const customError: boolean = !(error.constructor.name === 'NodeError' || error.constructor.name === 'SyntaxError')

  res.status(error.statusCode || 500).json({
    response: 'ERROR',
    type: customError === false ? 'UnhandledError' : error.constructor.name,
    statusCode: error.statusCode || 500,
    message: error.message
  })

  next(error)
}
