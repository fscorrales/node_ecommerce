import { Router } from 'express'
// import { authorizeAdmin, verifyToken } from '../middleware/auth'
import { validateObjectId } from '../validators/main'
import { validateCreate, validateUpdate } from '../validators/users'
import { createOne, getAllActive, getOne, updateOne, deleteOne, deleteOneForever } from '../handlers/users'

const usersRouter: Router = Router()

usersRouter.post('/', validateCreate, createOne)

usersRouter.get('/', getAllActive)

// usersRouter.get('/deleted', usersHandlers.getAllDeletedUsers)

// usersRouter.get('/include_deleted', usersHandlers.getAllUsers)

usersRouter.get('/:id', validateObjectId, getOne)

usersRouter.put('/:id', validateObjectId, validateUpdate, updateOne)

usersRouter.delete('/:id', validateObjectId, deleteOne)

usersRouter.delete('/delete_forever/:id', validateObjectId, deleteOneForever)

export default usersRouter
