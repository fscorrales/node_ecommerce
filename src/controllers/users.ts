import Users from '../models/users'
import { CreateUser, PrivateStoredUser, PublicStoredUser, UpdateUser } from '../types'

// Controlador para crear un nuevo usuario
export const createOne = async (CreationUser: CreateUser): Promise<PrivateStoredUser> => {
  const existedUser = await Users.findOne({
    $or: [
      { email: CreationUser.email },
      { username: CreationUser.username }
    ]
  })
  if (existedUser != null) {
    throw new Error('User already exists')
  }
  const hashPassword = CreationUser.password
  const { password: _, ...userWithoutPassword } = CreationUser
  const newUser = await Users.create({ ...userWithoutPassword, hash_password: hashPassword })
  return newUser
}

// Controlador para obtener todos los usuarios
export const getAll = async (): Promise<PrivateStoredUser[]> => {
  return await Users.find({})
}

export const updateOne = async (id: string, UpdateUser: UpdateUser): Promise<PublicStoredUser> => {
  const existedUser = await Users.findOne({
    $or: [
      { email: UpdateUser.email },
      { username: UpdateUser.username }
    ],
    _id: { $ne: id }
  }
  )
  if (existedUser != null) {
    throw new Error('El username y/o email ya existe')
  }

  const userUpdated = await Users.findByIdAndUpdate(
    id, UpdateUser, { new: true }
  ).lean()

  if (userUpdated == null) {
    throw new Error('User not found')
  }
  const { hash_password: _, ...userUpdatedWithoutPassword } = userUpdated
  return userUpdatedWithoutPassword
}

export const deleteOne = async (id: string): Promise<PublicStoredUser> => {
  const userDeleted = await Users.findByIdAndUpdate(
    id, { deactivated_at: Date.now() }, { new: true }
  ).lean()

  if (userDeleted == null) {
    throw new Error('User not found')
  }
  const { hash_password: _, ...userDeletedWithoutPassword } = userDeleted
  return userDeletedWithoutPassword
}

export const deleteOneForever = async (id: string): Promise<PublicStoredUser> => {
  const userDeleted = await Users.findByIdAndDelete(id).lean()

  if (userDeleted == null) {
    throw new Error('User not found')
  }
  const { hash_password: _, ...userDeletedWithoutPassword } = userDeleted
  return userDeletedWithoutPassword
}
// // Controlador para obtener un usuario por nombre
// const getOneUserController = (name) => {
//   const oneUser = users.filter((user) => user.name === name);
//   return oneUser;
// };

// // Controlador para obtener un usuario por ID
// const getUserByIdController = (id) => {
//   const userById = users.find((usuario) => usuario.id === Number(id));
//   return userById;
// };
