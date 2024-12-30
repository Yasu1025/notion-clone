import { Router } from 'express'
import { verifyTokenMiddleware } from '../rules/verifyTokenMiddleware'
import { memoController } from '../controllers/memoController'

const router = Router()

router.post('/', verifyTokenMiddleware, memoController.create)
router.get('/', verifyTokenMiddleware, memoController.getAll)
router.get('/:memoId', verifyTokenMiddleware, memoController.getOne)
router.put('/:memoId', verifyTokenMiddleware, memoController.update)
router.delete('/:memoId', verifyTokenMiddleware, memoController.destroy)

export default router
