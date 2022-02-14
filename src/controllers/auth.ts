import { NextFunction, Request, Response } from 'express'
import { CreateUserDto } from '@core/dtos'
import { HttpResponse } from '@core/classes'
import { authService } from 'services'

const signIn = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body

  try {
    const token = await authService.signIn(email, password)

    const response = new HttpResponse({
      statusCode: 200,
      description: 'Sign in successful',
      data: { token }
    }, res)

    response.send()
  } catch (err) {
    next(err)
  }
}

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const { firstName, lastName, email, password }: CreateUserDto = req.body

  try {
    const { user, token } = await authService.signUp({ firstName, lastName, email, password })
    const response = new HttpResponse({
      statusCode: 201,
      description: 'User signed up and logged in successfully',
      data: { user, token }
    }, res)

    response.send()
  } catch (err) {
    next(err)
  }
}

export const authControllers = {
  signIn,
  signUp
}
