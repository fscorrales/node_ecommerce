import { Router } from 'express'
// import { authorizeAdmin, verifyToken } from '../middleware/auth'
import * as usersHandlers from '../handlers/users'

const usersRouter: Router = Router()

usersRouter.post('/', usersHandlers.createUser)

usersRouter.get('/', usersHandlers.getAllActiveUsers)

// usersRouter.get('/deleted', usersHandlers.getAllDeletedUsers)

// usersRouter.get('/include_deleted', usersHandlers.getAllUsers)

usersRouter.get('/:id', usersHandlers.getOneUser)

usersRouter.put('/:id', usersHandlers.updateUser)

usersRouter.delete('/:id', usersHandlers.deleteUser)

export default usersRouter
