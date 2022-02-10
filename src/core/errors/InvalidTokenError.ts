import { CustomError } from './CustomError'

export class InvalidTokenError extends CustomError {
  constructor () {
    super(403, 'Invalid auth token')
  }
}
