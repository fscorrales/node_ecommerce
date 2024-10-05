import { CreateUser, LoginUser, PrivateStoredUser } from '../types'
import { createOneCtrl } from './users'
import Users from '../models/users'
import { verified } from '../security/password'
import { generateToken } from '../security/token'

// Controlador para registrarse
export const registerCtrl = async (user: CreateUser): Promise<PrivateStoredUser> => {
  const newUser = await createOneCtrl(user)
  return newUser
}

// Controlador para iniciar sesión (login)
export const loginCtrl = async (user: LoginUser): Promise<string> => {
  // Buscar si el usuario con el email proporcionado existe en el arreglo de users
  const existedUser = await Users.findOne({ username: user.username }).lean()

  if (existedUser == null) {
    throw new Error('Usuario no encontrado')
  }
  // Comparar la contraseña recibida sin hashear con la contraseña hasheada almacenada
  const isPasswordMatch = await verified(user.password, existedUser.hash_password)
  if (!isPasswordMatch) {
    throw new Error('Contraseña incorrecta')
  }
  // Crear un token JWT con el id del usuario y el rol
  const token = generateToken(existedUser._id.toString(), existedUser.role)
  // Si todo coincide, retornar el usuario
  return token
}
