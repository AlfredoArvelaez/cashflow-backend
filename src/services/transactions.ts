import { usersService } from './users'

const getUserTransactions = (userId: number) => {
  return usersService.getUser(userId).then(data => data?.transactions)
}

export const transactionsService = { getUserTransactions }
