import { HttpResponse } from '@core/classes'
import { UpdateTransactionDto, CreateTransactionDto } from '@core/dtos'
import { NextFunction, Request, Response } from 'express'
import { transactionsService } from 'services'

const getCurrentUserTransactions = async (req: Request, res: Response, next: NextFunction) => {
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
}

const createTransaction = async (req: Request, res: Response, next: NextFunction) => {
  const currentUserId = req.userId
  const { description, amount, type, date }: CreateTransactionDto = req.body

  // DESCRIPTION MUST BE STRING -> MIN 3 MAX 60
  // AMOUNT -> NUMBER POSITIVE,
  // TYPE:: EXPENSES OR INCOMES (ENUM)
  // DATE: DATE

  try {
    const transactionData: CreateTransactionDto = {
      description,
      amount,
      type,
      date,
      userId: currentUserId
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
}

const updateTransaction = async (req: Request, res: Response, next: NextFunction) => {
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
}

const deleteTransaction = async (req: Request, res: Response, next: NextFunction) => {
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
}

export const transactionsControllers = { getCurrentUserTransactions, createTransaction, updateTransaction, deleteTransaction }
