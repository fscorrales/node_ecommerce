import cookieParser from 'cookie-parser'
import express from 'express'
import morgan from 'morgan'
import mainRouter from './routes/main'

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use(cookieParser())

// Enable CORS for all routes
app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use('/api', mainRouter)

export const server = app
