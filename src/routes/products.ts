import { Router } from 'express'
import { getOne, getAll, createOne, updateOne, deleteOne } from '../handlers/products'
import { validateCreate, validateQuery } from '../validators/products'
import { validateObjectId } from '../validators/main'

const productsRouter = Router()

productsRouter.get('/', validateQuery, getAll)

productsRouter.get('/:id', validateObjectId, getOne)

productsRouter.post('/', validateCreate, createOne)

productsRouter.put('/:id', validateObjectId, updateOne)

productsRouter.delete('/:id', validateObjectId, deleteOne)

export default productsRouter
