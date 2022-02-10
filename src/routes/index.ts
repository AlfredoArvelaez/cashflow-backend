import { Router } from 'express'
import authRoutes from './auth'
import usersRoutes from './users'
import transactionsRoutes from './transactions'
import { authenticate } from '../middlewares'

const router = Router()

router.use('/auth', authRoutes)
router.use('/users', authenticate, usersRoutes)
router.use('/transactions', authenticate, transactionsRoutes)

export default router
