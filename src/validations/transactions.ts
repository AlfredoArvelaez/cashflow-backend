import { body } from 'express-validator'
import { checkValidationErrors } from 'middlewares'

const createTransaction = [
  body('description')
    .notEmpty()
    .withMessage('description field is required')
    .isString()
    .withMessage('description field must be a string')
    .isLength({ min: 4, max: 60 })
    .withMessage('description field must have between 4 and 60 characters')
    .trim(),
  body('amount')
    .notEmpty()
    .withMessage('amount field is required')
    .isFloat({ gt: 0 })
    .withMessage('amount field only allows positive numbers'),
  body('type')
    .notEmpty()
    .withMessage('type field is required')
    .isIn(['EXPENSES', 'INCOMES'])
    .withMessage('invalid transaction type'),
  body('date')
    .notEmpty()
    .withMessage('date field is required')
    .isISO8601()
    .withMessage('date field must be a valid date'),
  checkValidationErrors
]

const updateTransaction = [
  body('description')
    .optional()
    .isString()
    .withMessage('description field must be a string')
    .isLength({ min: 4, max: 60 })
    .withMessage('description field must have between 4 and 60 characters')
    .trim(),
  body('amount')
    .optional()
    .isFloat({ gt: 0 })
    .withMessage('amount field only allows positive numbers'),
  body('date')
    .optional()
    .isISO8601()
    .withMessage('date field must be a valid date'),
  checkValidationErrors
]

export const transactionsValidations = { createTransaction, updateTransaction }
