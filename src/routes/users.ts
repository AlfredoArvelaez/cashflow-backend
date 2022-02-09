import { Router } from 'express'
import { usersService } from '../services/users'

const router = Router()

router.get('/', (req, res) => {
  const userId = 1 // user ID will be given by the auth middleware (some kind of ache that will be storing the userID)

  usersService.getUser(userId)
    .then(data => res.json(data))
    .catch(console.log)
})

export default router
