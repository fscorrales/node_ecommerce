import { Router } from 'express'
// import { authorizeAdmin, verifyToken } from '../middleware/auth'
import { validateCreate } from '../validators/users'
import { createOne, getAllActive, getOne, updateOne, deleteOne, deleteOneForever } from '../handlers/users'

const usersRouter: Router = Router()

usersRouter.post('/', validateCreate, createOne)

usersRouter.get('/', getAllActive)

// usersRouter.get('/deleted', usersHandlers.getAllDeletedUsers)

// usersRouter.get('/include_deleted', usersHandlers.getAllUsers)

usersRouter.get('/:id', getOne)

usersRouter.put('/:id', updateOne)

usersRouter.delete('/:id', deleteOne)

usersRouter.delete('/delete_forever/:id', deleteOneForever)

export default usersRouter
