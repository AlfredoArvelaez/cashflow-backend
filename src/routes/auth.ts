import { Router } from 'express'
import { CreateUserDTO } from '../models/CreateUserDto'
import { authService } from '../services'

const router = Router()

router.post('/signIn', (req, res) => {
  res.send('SignIn route working')
})

router.post('/signUp', (req, res) => {
  const { firstName, lastName, email, password }: CreateUserDTO = req.body

  authService.signUp({ firstName, lastName, email, password })
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

export default router
