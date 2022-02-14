import { Router } from 'express'
import { authControllers } from 'controllers'
import { authValidations } from 'validations'
const router = Router()

router.post('/signIn', authControllers.signIn)
router.post('/signUp', authValidations.signUp, authControllers.signUp)

export default router
