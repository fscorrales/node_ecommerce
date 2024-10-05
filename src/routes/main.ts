import { Router } from 'express'
import productsRouter from './products'
import usersRouter from './users'
import authRouter from './auth'

const mainRouter = Router()

mainRouter.use('/auth', authRouter)
mainRouter.use('/users', usersRouter)
mainRouter.use('/products', productsRouter)

export default mainRouter
