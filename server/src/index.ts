import express, { Application } from 'express'
import dotenv from 'dotenv'
import router from './routes'
import { connectToMongoDB } from './config/db'
dotenv.config()

connectToMongoDB()

const app: Application = express()
const PORT = parseInt(process.env.PORT || '3000', 10) // Default 3000

app.use(express.json())

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`${PORT} is listening.....`)
})
