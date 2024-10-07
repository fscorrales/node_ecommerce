import { Router } from 'express'
import { validateObjectId } from '../validators/main'
import { validateCreate, validateQuery, validateUpdate } from '../validators/users'
import {
  createOne, getAllActive, getAllDeleted, getMe,
  getAll, getOne, updateOne, deleteOne, deleteOneForever
} from '../handlers/users'
import { authorizeAdmin, verifyToken, authorizeAdminOrSameUser } from '../security/token'

const usersRouter: Router = Router()

usersRouter.post('/', verifyToken, authorizeAdmin, validateCreate, createOne)

usersRouter.get('/me', verifyToken, getMe)

usersRouter.get('/:id', verifyToken, validateObjectId, getOne)

usersRouter.get('/', verifyToken, validateQuery, getAllActive)

usersRouter.get('/deleted', verifyToken, authorizeAdmin, validateQuery, getAllDeleted)

usersRouter.get('/include_deleted', verifyToken, authorizeAdmin, validateQuery, getAll)

usersRouter.put('/:id', verifyToken, validateObjectId, authorizeAdminOrSameUser, validateUpdate, updateOne)

usersRouter.delete('/:id', verifyToken, validateObjectId, authorizeAdminOrSameUser, deleteOne)

usersRouter.delete('/delete_forever/:id', verifyToken, authorizeAdmin, validateObjectId, deleteOneForever)

export default usersRouter
