import { Router } from 'express'
import { HttpResponseInterface } from '../core/interfaces'
import { CreateUserDTO } from '../core/dtos/CreateUserDto'
import { authService } from '../services'

const router = Router()

router.post('/signIn', async (req, res, next) => {
  const { email, password } = req.body

  const token = await authService.signIn(email, password)

  const response: HttpResponseInterface = {
    statusCode: 200,
    description: 'Sign in successful',
    data: { token }
  }

  res.status(200).json(response)
})

router.post('/signUp', async (req, res, next) => {
  const { firstName, lastName, email, password }: CreateUserDTO = req.body

  try {
    const userData = await authService.signUp({ firstName, lastName, email, password })
    const response: HttpResponseInterface = {
      statusCode: 200,
      description: 'User signed up and logged in successfully',
      data: userData
    }

    res.status(200).json(response)
  } catch (err) {
    next(err)
  }
})

export default router
