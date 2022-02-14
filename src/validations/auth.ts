import { body } from 'express-validator'
import { checkValidationErrors } from 'middlewares'

const signUp = [
  body('firstName')
    .isString()
    .withMessage('firstName field must be an string')
    .isLength({ min: 3, max: 20 })
    .withMessage('firstName field must have between 3 and 20 characters')
    .toLowerCase()
    .trim(),
  body('lastName')
    .isString()
    .withMessage('lastName field must be an string')
    .isLength({ min: 3, max: 20 })
    .withMessage('lastName field must have between 3 and 20 characters')
    .toLowerCase()
    .trim(),
  body('email')
    .isEmail()
    .withMessage('email field must have a valid and real E-mail')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 8, max: 16 })
    .withMessage('password field must have between 8 and 16 characters')
    .trim(),
  checkValidationErrors
]

export const authValidations = { signUp }
