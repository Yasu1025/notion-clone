import { Router } from 'express'
import { userRegisterRules } from '../rules/auth/userRegisterRules'
import { userController } from '../controllers/userController'
import { userLoginRules } from '../rules/auth/userLoginRules'
import { verifyTokenMiddleware } from '../rules/verifyTokenMiddleware'

const router = Router()

router.post('/register', userRegisterRules, userController.register)
router.post('/login', userLoginRules, userController.login)
router.post('/verify-token', verifyTokenMiddleware, userController.verifyToken)
export default router
