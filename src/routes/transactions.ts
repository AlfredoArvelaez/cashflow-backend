import { Router } from 'express'
import { transactionsService } from '../services/transactions'

const router = Router()

router.get('/', (req, res) => {
  const userId = req.userId // user ID will be given by the auth middleware (some kind of ache that will be storing the userID)
  transactionsService.getUserTransactions(userId)
    .then(allTransactions => res.json(allTransactions))
})

router.post('/', (req, res) => {
  const userId = req.userId // user ID will be given by the auth middleware (some kind of ache that will be storing the userID)
  res.send(`Here we should create new transaction from the user: ${userId}`)
})

router.put('/:transactionId', (req, res) => {
  const userId = req.userId // user ID will be given by the auth middleware (some kind of ache that will be storing the userID)
  const { transactionId } = req.params
  res.send(`Here we should update transaction: ${transactionId} from the user: ${userId}`)
})

router.delete('/:transactionId', (req, res) => {
  const userId = req.userId // user ID will be given by the auth middleware (some kind of ache that will be storing the userID)
  const { transactionId } = req.params

  res.send(`Here we should delete transaction ${transactionId} from the user ${userId}`)
})

export default router
