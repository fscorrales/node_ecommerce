// import bcrypt from 'bcryptjs'
// import { users_db } from '../db/test_db'
// import { JWT_SECRET, SALT_ROUND } from '../../config'
// import { CreationUser, LoginUser, PrivateStoredUser } from '../types'
// import jwt from 'jsonwebtoken'

// // Controlador para registrarse
// export const registerController = async (CreationUser: CreationUser): Promise<PrivateStoredUser> => {
//   const userExists = users_db.some((user) => user.email === CreationUser.email)
//   if (userExists) {
//     throw new Error('Usuario registrado')
//   }
//   const id = Math.max(...users_db.map((user) => user.id)) + 1
//   const hashedPassword = await bcrypt.hash(CreationUser.password, SALT_ROUND)
//   const newUser: PrivateStoredUser = { id, ...CreationUser, password: hashedPassword }
//   users_db.push(newUser)
//   return newUser
// }

// // Controlador para iniciar sesión (login)
// export const loginController = async (LoginUser: LoginUser): Promise<PrivateStoredUser> => {
//   // Buscar si el usuario con el email proporcionado existe en el arreglo de users
//   const user = users_db.find((user) => user.username === LoginUser.username)
//   if (user == null) {
//     throw new Error('Usuario no encontrado')
//   }
//   // Comparar la contraseña recibida sin hashear con la contraseña hasheada almacenada
//   const isPasswordMatch = await bcrypt.compare(LoginUser.password, user.password)
//   if (!isPasswordMatch) {
//     throw new Error('Contraseña incorrecta')
//   }
//   // Crear un token JWT con el id del usuario y el rol
//   const token = jwt.sign(
//     { id: user.id, role: user.role },
//     JWT_SECRET, // Debes tener una clave secreta segura
//     { expiresIn: '1h' }
//   )
//   // Eliminar la contraseña antes de devolver la respuesta
//   const { password: _, ...userWithoutPassword } = user
//   // Si todo coincide, retornar el usuario
//   return {
//     token, // Devolver el token en la respuesta
//     user: userWithoutPassword
//   }
// }
