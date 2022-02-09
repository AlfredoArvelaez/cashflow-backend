import { Router } from 'express'
import { usersService } from '../services/users'

const router = Router()

router.get('/', (req, res) => {
  const userId = req.userId

  usersService.getUser(userId)
    .then(data => res.json(data))
    .catch(console.log)
})

export default router
