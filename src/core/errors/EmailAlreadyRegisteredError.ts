import { CustomError } from './CustomError'

export class EmailAlreadyRegisteredError extends CustomError {
  email: string

  constructor (email: string) {
    super(400, `Email: ${email} already registered`)

    this.email = email
  }
}
