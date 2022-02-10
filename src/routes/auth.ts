import { Router } from 'express'
import { CreateUserDTO } from '../core/dtos/CreateUserDto'
import { authService } from '../services'
import { HttpResponse } from '../core/classes'
import { InvalidCredentialsError } from '../core/errors'

const router = Router()

router.post('/signIn', async (req, res, next) => {
  const { email, password } = req.body

  try {
    const token = await authService.signIn(email, password)

    if (!token) {
      throw new InvalidCredentialsError()
    }

    const response = new HttpResponse({ statusCode: 200, description: 'Sign in successful', data: { token } }, res)
    response.send()
  } catch (err) {
    next(err)
  }
})

router.post('/signUp', async (req, res, next) => {
  const { firstName, lastName, email, password }: CreateUserDTO = req.body

  try {
    const userData = await authService.signUp({ firstName, lastName, email, password })
    const response = new HttpResponse({
      statusCode: 200,
      description: 'User signed up and logged in successfully',
      data: userData
    }, res)

    response.send()
  } catch (err) {
    next(err)
  }
})

export default router
