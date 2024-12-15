import { body } from 'express-validator'
import User from '../models/user'

export const userRegisterRules = [
  body('username').isLength({ min: 8 }).withMessage('Username must be more than 8 chars'),
  body('password').isLength({ min: 8 }).withMessage('Password must be more than 8 chars'),
  body('confirmPassword')
    .isLength({ min: 8 })
    .withMessage('Confirm password must be more than 8 chars'),
  body('username').custom((value: string) => {
    return User.findOne({ username: value }).then(user => {
      if (user) return Promise.reject('This username is already taken....')
    })
  }),
]
