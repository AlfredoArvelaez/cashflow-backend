import { Router } from 'express'
import { transactionsControllers } from 'controllers'

const router = Router()

router.get('/', transactionsControllers.getCurrentUserTransactions)

router.post('/', transactionsControllers.createTransaction)

router.put('/:transactionId', transactionsControllers.updateTransaction)

router.delete('/:transactionId', transactionsControllers.deleteTransaction)

export default router
