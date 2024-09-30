import { Router } from 'express'
import productsRouter from './products'
import usersRouter from './users'

const mainRouter = Router()

mainRouter.use('/users', usersRouter)
mainRouter.use('/products', productsRouter)

export default mainRouter
