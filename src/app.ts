import express from 'express'
import morgan from 'morgan'
import mainRouter from './routes/main'
import cookieParser from 'cookie-parser'

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use(cookieParser())

app.use('/api', mainRouter)

export const server = app
