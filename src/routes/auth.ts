import { Router } from 'express'
import { CreateUserDTO } from '../models/CreateUserDto'
// import { CreateTransactionDTO } from '../models/CreateTransactionDTO'
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

// router.post('/transaction', async (req, res) => {
//   const { description, amount, type, userId }: CreateTransactionDTO = req.body

//   try {
//     const newTransaction = await database.transaction.create({
//       data: {
//         description,
//         amount,
//         type,
//         userId,
//         date: new Date()
//       }
//     })

//     res.json(newTransaction)
//   } catch (err) {
//     console.log(err)
//   }
// })

// router.get('/userData/:id', async (req, res) => {
//   const { id } = req.params

//   try {
//     const userData = await database.user.findUnique({ where: { id: parseInt(id) }, include: { transactions: true } })

//     res.json(userData)
//   } catch (err) {
//     console.log(err)
//   }
// })

export default router
