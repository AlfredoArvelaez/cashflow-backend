import { database } from '../core/database'
import { CreateTransactionDTO } from '../core/dtos/CreateTransactionDTO'
import { usersService } from './users'

const getUserTransactions = (userId: number) => {
  return usersService.getUser(userId).then(data => data?.transactions)
}

const createTransaction = (transactionData: CreateTransactionDTO) => {
  return database.transaction.create({ data: transactionData })
}

export const transactionsService = { getUserTransactions, createTransaction }
