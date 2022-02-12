import { usersService } from '.'
import { database } from '@core/database'
import { NotFoundError } from '@core/errors'
import { UpdateTransactionDto, CreateTransactionDto } from '@core/dtos'

const getAll = (userId: number) => {
  return database.transaction.findMany({ where: { userId } })
}

const createOne = (transactionData: CreateTransactionDto) => {
  return database.transaction.create({
    data: transactionData,
    select: {
      id: true,
      description: true,
      amount: true,
      date: true,
      type: true
    }
  })
}

const updateOne = async (transactionData: UpdateTransactionDto, transactionId: number, userId: number) => {
  const currentUser = await usersService.getById(userId)
  const transactionExists = currentUser!.transactions.some(trans => trans.id === transactionId)

  if (!transactionExists) throw new NotFoundError('Transaction')

  return database.transaction.update({ data: transactionData, where: { id: transactionId } })
}

const deleteOne = async (transactionId: number, userId: number) => {
  const currentUser = await usersService.getById(userId)
  const transactionExists = currentUser!.transactions.some(trans => trans.id === transactionId)

  if (!transactionExists) throw new NotFoundError('Transaction')

  return database.transaction.delete({ where: { id: transactionId } })
}

export const transactionsService = { getAll, createOne, deleteOne, updateOne }
