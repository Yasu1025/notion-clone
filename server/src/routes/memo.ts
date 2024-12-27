import { Router } from 'express'
import { verifyTokenMiddleware } from '../rules/verifyTokenMiddleware'
import { memoController } from '../controllers/memoController'

const router = Router()

router.post('/', verifyTokenMiddleware, memoController.create)
router.get('/', verifyTokenMiddleware, memoController.getAll)

export default router
