import { Router } from 'express'
const router = Router()

router.post('/signIn', (req, res) => {
  res.send('SignIn route working')
})

router.post('/signUp', (req, res) => {
  res.send('SignUp route working')
})

export default router
