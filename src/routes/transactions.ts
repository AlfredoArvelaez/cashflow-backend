import { Router } from 'express'
import { HttpApiError, HttpApiResponse } from '../interfaces'
import { CreateTransactionDTO } from '../models/CreateTransactionDTO'
import { transactionsService } from '../services'

const router = Router()

router.get('/', (req, res) => {
  const userId = req.userId
  transactionsService.getUserTransactions(userId)
    .then(allTransactions => res.json(allTransactions))
})

router.post('/', async (req, res) => {
  const currentUserId = req.userId
  const { date, userId, ...rest }: CreateTransactionDTO = req.body

  try {
    const transactionData: CreateTransactionDTO = {
      ...rest,
      userId: currentUserId,
      date: new Date()
    }

    const newTransaction = await transactionsService.createTransaction(transactionData)

    const response: HttpApiResponse = {
      code: 201,
      description: 'Transaction created successfully',
      data: newTransaction
    }

    res.status(201).json(response)
  } catch {
    const errorResponse: HttpApiError = {
      code: 500,
      type: 'Error during the transaction creation',
      description: 'Something was wrong'
    }

    res.status(500).json(errorResponse)
  }
})

router.put('/:transactionId', (req, res) => {
  const userId = req.userId
  const { transactionId } = req.params
  res.send(`Here we should update transaction: ${transactionId} from the user: ${userId}`)
})

router.delete('/:transactionId', (req, res) => {
  const userId = req.userId
  const { transactionId } = req.params

  res.send(`Here we should delete transaction ${transactionId} from the user ${userId}`)
})

export default router
