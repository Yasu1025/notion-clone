import express, { Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectToMongoDB } from './config/db'
import { setupRoutes } from './routes'
dotenv.config()

connectToMongoDB()

const app: Application = express()
const PORT = parseInt(process.env.PORT || '3000', 10) // Default 3000

app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }))

setupRoutes(app)

app.listen(PORT, () => {
  console.log(`${PORT} is listening.....`)
})
