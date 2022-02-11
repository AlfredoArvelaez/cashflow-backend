import { CustomError } from './CustomError'

export class AuthHeaderNotSentError extends CustomError {
  constructor () {
    super(400, 'Authorization header not sent')
  }
}
