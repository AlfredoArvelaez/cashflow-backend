import { Router } from 'express'
import authRoutes from './auth'
import usersRoutes from './users'
import transactionsRoutes from './transactions'

const router = Router()

router.use('/auth', authRoutes)
router.use('/users', usersRoutes)
router.use('/transactions', transactionsRoutes)

export default router
