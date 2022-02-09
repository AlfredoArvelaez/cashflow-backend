import { CustomError } from './CustomError'

export class NotFoundError extends CustomError {
  propertyName: string

  constructor (propertyName: string) {
    super(404, `${propertyName} not found`)

    this.propertyName = propertyName
  }
}
