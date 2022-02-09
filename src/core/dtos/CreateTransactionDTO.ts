enum TRANSACTION_TYPES { // eslint-disable-line
  INCOMES = 'INCOMES', // eslint-disable-line
  EXPENSES = 'EXPENSES' // eslint-disable-line
}

export interface CreateTransactionDTO {
  description: string,
  amount: number,
  date: Date,
  type: TRANSACTION_TYPES.INCOMES | TRANSACTION_TYPES.EXPENSES,
  userId: number
}
