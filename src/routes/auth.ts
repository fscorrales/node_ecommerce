import { Router } from 'express'
import { register, login, logout } from '../handlers/auth'
import { validateRegister, validateLogin } from '../validators/auth'

const authRoutes = Router()

authRoutes.post('/register', validateRegister, register)
authRoutes.post('/login', validateLogin, login)
authRoutes.post('/logout', logout)

export default authRoutes
