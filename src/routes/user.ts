import { Router } from 'express'

const router = Router()

router.get('/:userId/transactions', (req, res) => {
  const { userId } = req.params
  res.send(`Here we should get all the transactions from the user: ${userId}`)
})

router.post('/:userId/transactions', (req, res) => {
  const { userId } = req.params
  res.send(`Here we should create new transaction from the user: ${userId}`)
})

router.put('/:userId/transactions/:transactionId', (req, res) => {
  const { userId, transactionId } = req.params
  res.send(`Here we should update transaction: ${transactionId} from the user: ${userId}`)
})

router.delete('/:userId/transactions/:transactionId', (req, res) => {
  const { userId, transactionId } = req.params

  res.send(`Here we should delete transaction ${transactionId} from the user ${userId}`)
})

export default router
