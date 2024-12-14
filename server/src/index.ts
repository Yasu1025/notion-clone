import express, { Application } from 'express'

const app: Application = express()
const PORT = 5001

// test
app.get('/', (req, res) => {
  res.send('Hello!!!')
})

app.listen(PORT, () => {
  console.log(`${PORT} is listening.....`)
})
