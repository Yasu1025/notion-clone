import { Application } from 'express'
import authRouter from './auth'

export const setupRoutes = (app: Application): void => {
  app.use('/api/auth', authRouter)
}
