import { Router } from 'express'
import {
  getOne, getAll, createOne, updateOne,
  deleteOne, deleteOneForever, getAllActive, getAllDeleted
} from '../handlers/products'
import { validateCreate, validateQuery } from '../validators/products'
import { validateObjectId } from '../validators/main'
import {
  verifyToken, authorizeAdminOrSameSeller,
  authorizeAdmin, authorizeAdminOrSeller
} from '../security/token'

const productsRouter = Router()

productsRouter.get('/', validateQuery, getAllActive)

productsRouter.get('/deleted', verifyToken, authorizeAdmin, validateQuery, getAllDeleted)

productsRouter.get('/include_deleted', verifyToken, authorizeAdmin, validateQuery, getAll)

productsRouter.get('/:id', validateObjectId, getOne)

productsRouter.post('/', verifyToken, authorizeAdminOrSeller, validateCreate, createOne)

productsRouter.put('/:id', verifyToken, validateObjectId, authorizeAdminOrSameSeller, updateOne)

productsRouter.delete('/:id', verifyToken, validateObjectId, authorizeAdminOrSameSeller, deleteOne)

productsRouter.delete('/delete_forever/:id', verifyToken, authorizeAdmin, validateObjectId, deleteOneForever)

export default productsRouter
