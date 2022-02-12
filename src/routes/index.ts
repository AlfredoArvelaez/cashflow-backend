import { Router } from 'express'
import { authenticate } from 'middlewares'
import authRoutes from './auth'
import usersRoutes from './users'
import transactionsRoutes from './transactions'

const router = Router()

router.use('/auth', authRoutes)
router.use('/users', authenticate, usersRoutes)
router.use('/transactions', authenticate, transactionsRoutes)

export default router
