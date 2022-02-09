export class CustomError extends Error {
  statusCode: number

  constructor (statusCode: number, message: string) {
    super(message)

    this.name = Error.name
    this.statusCode = statusCode
    Object.setPrototypeOf(this, new.target.prototype)
    Error.captureStackTrace(this)
  }
}
