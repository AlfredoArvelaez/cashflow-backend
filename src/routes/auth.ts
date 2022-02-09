import { Router } from 'express'
import { HttpApiResponse, HttpApiError } from '../interfaces'
import { CreateUserDTO } from '../models/CreateUserDto'
import { authService } from '../services'

const router = Router()

router.post('/signIn', (req, res) => {
  res.send('SignIn route working')
})

router.post('/signUp', async (req, res) => {
  const { firstName, lastName, email, password }: CreateUserDTO = req.body

  try {
    const userData = await authService.signUp({ firstName, lastName, email, password })
    const response: HttpApiResponse = {
      code: 200,
      description: 'User signed up and logged in successfully',
      data: userData
    }

    res.status(200).json(response)
  } catch {
    const errorResponse: HttpApiError = {
      code: 500,
      type: 'Internal server error',
      description: 'Internal server error'
    }
    res.status(500).json(errorResponse)
  }
})

export default router
