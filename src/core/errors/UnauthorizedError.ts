import { CustomError } from './CustomError'

export class UnauthorizedError extends CustomError {
  constructor (message: string = 'Email or password is wrong') {
    super(401, message)
  }
}
