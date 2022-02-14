import { Router } from 'express'
import { usersControllers } from 'controllers'

const router = Router()

router.get('/', usersControllers.getUser)

export default router
