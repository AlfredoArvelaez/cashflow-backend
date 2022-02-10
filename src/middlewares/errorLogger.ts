import { NextFunction, Request, Response } from 'express'
import { CustomError } from '../core/errors'

export const errorLogger = (error: CustomError, req: Request, res: Response, next: NextFunction) => {
  const customError: boolean = !(error.constructor.name === 'NodeError' || error.constructor.name === 'SyntaxError')
  console.log('ERROR')
  console.log(`Type: ${customError === false ? 'UnhandledError' : error.constructor.name}`)
  console.log(`Status code ${error.statusCode || 500}`)
  console.log(error.stack)
}
