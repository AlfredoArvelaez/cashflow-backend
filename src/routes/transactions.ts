import { Router } from 'express'
import { CreateTransactionDTO } from '../core/dtos'
import { transactionsService } from '../services'
import { HttpResponse } from '../core/classes'
import { UpdateTransactionDto } from '../core/dtos/UpdateTransactionDto'

const router = Router()

router.get('/', async (req, res, next) => {
  const userId = req.userId

  try {
    const transactions = await transactionsService.getAll(userId)

    const response = new HttpResponse({
      statusCode: 200,
      description: 'Transactions retrieved successfully',
      data: { transactions }
    }, res)

    response.send()
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const currentUserId = req.userId
  const { description, amount, type, date }: CreateTransactionDTO = req.body

  try {
    const transactionData: CreateTransactionDTO = {
      description,
      amount,
      type,
      userId: currentUserId,
      date: new Date()
    }

    const newTransaction = await transactionsService.createOne(transactionData)

    const response = new HttpResponse({
      statusCode: 201,
      description: 'Transaction created successfully',
      data: { transaction: newTransaction }
    }, res)

    response.send()
  } catch (err) {
    next(err)
  }
})

router.put('/:transactionId', async (req, res, next) => {
  const { amount, date, description }: UpdateTransactionDto = req.body
  const userId = req.userId
  const transactionId = parseInt(req.params.transactionId)

  try {
    const updatedTransaction = await transactionsService.updateOne({ amount, date, description }, transactionId, userId)
    const response = new HttpResponse({
      statusCode: 200,
      description: 'Transaction updated',
      data: { transaction: updatedTransaction }
    }, res)

    response.send()
  } catch (err) {
    next(err)
  }
})

router.delete('/:transactionId', async (req, res, next) => {
  const userId = req.userId
  const transactionId = parseInt(req.params.transactionId)

  try {
    const deletedTransaction = await transactionsService.deleteOne(transactionId, userId)

    const response = new HttpResponse({
      statusCode: 200,
      description: 'Transaction deleted',
      data: { transaction: deletedTransaction }
    }, res)

    response.send()
  } catch (err) {
    next(err)
  }
})

export default router
