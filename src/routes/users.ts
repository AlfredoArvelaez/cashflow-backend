import { Router } from 'express'
import { HttpApiResponse } from '../interfaces'
import { usersService } from '../services/users'

const router = Router()

router.get('/', (req, res) => {
  const userId = req.userId

  usersService.getUser(userId)
    .then(data => {
      const response: HttpApiResponse = {
        code: 200,
        description: 'User data retrieved successfully',
        data
      }

      res.status(200).json(response)
    })
    .catch(console.log)
})

export default router
