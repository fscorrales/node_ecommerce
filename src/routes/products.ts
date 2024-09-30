import { Router } from 'express'
import * as productsHandlers from '../handlers/products'

const productsRouter = Router()

productsRouter.get('/', productsHandlers.getAllProducts)

productsRouter.get('/:id', productsHandlers.getOneProduct)

productsRouter.post('/', productsHandlers.createProduct)

productsRouter.put('/:id', productsHandlers.updateProduct)

productsRouter.delete('/:id', productsHandlers.deleteProduct)

export default productsRouter
