import { CustomError } from './CustomError'

export class BadRequestError extends CustomError {
  message: string;

  constructor (message: string) {
    super(400, message)

    this.message = message
  }
}
