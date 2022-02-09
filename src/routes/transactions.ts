import { Router } from 'express'
import { HttpResponseInterface } from '../core/interfaces'
import { CreateTransactionDTO } from '../core/dtos'
import { transactionsService } from '../services'

const router = Router()

router.get('/', async (req, res, next) => {
  const userId = req.userId

  try {
    const allTransactions = await transactionsService.getUserTransactions(userId)

    const response: HttpResponseInterface = {
      statusCode: 200,
      description: 'Transactions retrieved successfully',
      data: allTransactions
    }

    res.status(200).json(response)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const currentUserId = req.userId
  const { date, userId, ...rest }: CreateTransactionDTO = req.body

  try {
    const transactionData: CreateTransactionDTO = {
      ...rest,
      userId: currentUserId,
      date: new Date()
    }

    const newTransaction = await transactionsService.createTransaction(transactionData)

    const response: HttpResponseInterface = {
      statusCode: 201,
      description: 'Transaction created successfully',
      data: newTransaction
    }

    res.status(201).json(response)
  } catch (err) {
    next(err)
  }
})

router.put('/:transactionId', (req, res, next) => {
  const userId = req.userId
  const { transactionId } = req.params
  res.send(`Here we should update transaction: ${transactionId} from the user: ${userId}`)
})

router.delete('/:transactionId', (req, res, next) => {
  const userId = req.userId
  const { transactionId } = req.params

  res.send(`Here we should delete transaction ${transactionId} from the user ${userId}`)
})

export default router
