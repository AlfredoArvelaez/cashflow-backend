import { Router } from 'express'
import { transactionsControllers } from 'controllers'
import { transactionsValidations } from 'validations'

const router = Router()

router.get('/', transactionsControllers.getCurrentUserTransactions)

router.post('/', transactionsValidations.createTransaction, transactionsControllers.createTransaction)

router.put('/:transactionId', transactionsValidations.updateTransaction, transactionsControllers.updateTransaction)

router.delete('/:transactionId', transactionsControllers.deleteTransaction)

export default router
