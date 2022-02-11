import { Router } from 'express'
import { CreateUserDTO } from '../core/dtos/CreateUserDto'
import { authService } from '../services'
import { HttpResponse } from '../core/classes'
const router = Router()

router.post('/signIn', async (req, res, next) => {
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
})

router.post('/signUp', async (req, res, next) => {
  const { firstName, lastName, email, password }: CreateUserDTO = req.body

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
})

export default router
