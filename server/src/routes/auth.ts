import { Router } from 'express'
import dotenv from 'dotenv'
import { userRegisterRules } from '../rules/userRegisterRules'
import { validateMIddleware } from '../rules/validateMIddleware'
import { userController } from '../controllers/userController'
dotenv.config()

const router = Router()

router.post('/register', userRegisterRules, validateMIddleware, userController.register)

export default router
