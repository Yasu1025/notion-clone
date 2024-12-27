import { Application } from 'express'
import authRouter from './auth'
import memoRouter from './memo'

export const setupRoutes = (app: Application): void => {
  app.use('/api/auth', authRouter)
  app.use('/api/memo', memoRouter)
}
