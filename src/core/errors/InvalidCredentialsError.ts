import { CustomError } from './CustomError'

export class InvalidCredentialsError extends CustomError {
  constructor () {
    super(401, 'Email or password is wrong')
  }
}
