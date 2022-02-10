import { Response } from 'express'
import { HttpResponseInterface } from '../interfaces'

export class HttpResponse {
  responseContext: Response
  response: string
  statusCode: number
  description: string
  data: any

  constructor ({ statusCode, description, data }: HttpResponseInterface, responseContext: Response) {
    this.responseContext = responseContext
    this.response = 'SUCCESSFUL'
    this.statusCode = statusCode
    this.description = description
    this.data = data
  }

  send () {
    this.responseContext.status(this.statusCode).json({
      response: this.response,
      statusCode: this.statusCode,
      description: this.description,
      data: this.data
    })
  }
}
