import { body } from 'express-validator'
import { validateMIddleware } from '../validateMIddleware'

export const userLoginRules = [
  body('username').isLength({ min: 8 }).withMessage('Username must be more than 8 chars'),
  body('password').isLength({ min: 8 }).withMessage('Password must be more than 8 chars'),
  validateMIddleware,
]
