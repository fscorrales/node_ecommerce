import { Router } from 'express'
// import { authorizeAdmin, verifyToken } from '../middleware/auth'
import { validateObjectId } from '../validators/main'
import { validateCreate, validateUpdate } from '../validators/users'
import { createOne, getAllActive, getAllDeleted, getAll, getOne, updateOne, deleteOne, deleteOneForever } from '../handlers/users'
import { authorizeAdmin, verifyToken, authorizeAdminOrSameUser } from '../security/token'

const usersRouter: Router = Router()

usersRouter.post('/', verifyToken, authorizeAdmin, validateCreate, createOne)

usersRouter.get('/', verifyToken, getAllActive)

usersRouter.get('/deleted', verifyToken, authorizeAdmin, getAllDeleted)

usersRouter.get('/include_deleted', verifyToken, authorizeAdmin, getAll)

usersRouter.get('/:id', verifyToken, validateObjectId, getOne)

usersRouter.put('/:id', verifyToken, validateObjectId, authorizeAdminOrSameUser, validateUpdate, updateOne)

usersRouter.delete('/:id', verifyToken, validateObjectId, authorizeAdminOrSameUser, deleteOne)

usersRouter.delete('/delete_forever/:id', verifyToken, authorizeAdmin, validateObjectId, deleteOneForever)

export default usersRouter
