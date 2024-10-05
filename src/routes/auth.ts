import { Router } from 'express'
import { register, login, logout } from '../handlers/auth'

const authRoutes = Router()

authRoutes.post('/register', register)
authRoutes.post('/login', login)
authRoutes.post('/logout', logout)

export default authRoutes
