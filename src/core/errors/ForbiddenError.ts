import { CustomError } from './'

export class ForbiddenError extends CustomError {
  constructor (message: string) {
    super(403, message)
  }
}
