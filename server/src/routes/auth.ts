import { Router } from 'express'
import { userRegisterRules } from '../rules/auth/userRegisterRules'
import { userController } from '../controllers/userController'
import { userLoginRules } from '../rules/auth/userLoginRules'

const router = Router()

router.post('/register', userRegisterRules, userController.register)
router.post('/login', userLoginRules, userController.login)
export default router
