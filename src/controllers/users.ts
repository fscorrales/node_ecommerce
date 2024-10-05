import Users from '../models/users'
import { CreateUser, PrivateStoredUser, PublicStoredUser, UpdateUser, QueryUser } from '../types'
import { encrypt } from '../security/password'

// Controlador para crear un nuevo usuario
export const createOneCtrl = async (user: CreateUser): Promise<PrivateStoredUser> => {
  const existedUser = await Users.findOne({
    $or: [
      { email: user.email },
      { username: user.username }
    ]
  })
  if (existedUser != null) {
    throw new Error('User already exists')
  }
  const hashPassword = await encrypt(user.password)
  const { password: _, ...userWithoutPassword } = user
  const newUser = await Users.create({ ...userWithoutPassword, hash_password: hashPassword })
  return newUser
}

// Controlador para obtener todos los usuarios
export const getAllActiveCtrl = async (queryUser: QueryUser = {}): Promise<PublicStoredUser[]> => {
  const users = await Users.find({ deactivated_at: { $eq: null }, ...queryUser }).lean()
  return users.map(({ hash_password: _, ...userWithoutPassword }) => userWithoutPassword)
}

export const getAllDeletedCtrl = async (queryUser: QueryUser = {}): Promise<PublicStoredUser[]> => {
  const users = await Users.find({ deactivated_at: { $ne: null }, ...queryUser }).lean()
  return users.map(({ hash_password: _, ...userWithoutPassword }) => userWithoutPassword)
}

export const getAllCtrl = async (queryUser: QueryUser = {}): Promise<PublicStoredUser[]> => {
  const users = await Users.find(queryUser).lean()
  return users.map(({ hash_password: _, ...userWithoutPassword }) => userWithoutPassword)
}

export const getOne = async (id: string): Promise<PublicStoredUser> => {
  const user = await Users.findById(id).lean()

  if (user == null) {
    throw new Error('User not found')
  }
  const { hash_password: _, ...userWithoutPassword } = user
  return userWithoutPassword
}

export const updateOneCtrl = async (id: string, user: UpdateUser): Promise<PublicStoredUser> => {
  const existedUser = await Users.findOne({
    $or: [
      { email: user.email },
      { username: user.username }
    ],
    _id: { $ne: id }
  }
  )
  if (existedUser != null) {
    throw new Error('El username y/o email ya existe')
  }

  const userUpdated = await Users.findByIdAndUpdate(
    id, user, { new: true }
  ).lean()

  if (userUpdated == null) {
    throw new Error('User not found')
  }
  const { hash_password: _, ...userUpdatedWithoutPassword } = userUpdated
  return userUpdatedWithoutPassword
}

export const deleteOneCtrl = async (id: string): Promise<PublicStoredUser> => {
  const userDeleted = await Users.findByIdAndUpdate(
    id, { deactivated_at: Date.now() }, { new: true }
  ).lean()

  if (userDeleted == null) {
    throw new Error('User not found')
  }
  const { hash_password: _, ...userDeletedWithoutPassword } = userDeleted
  return userDeletedWithoutPassword
}

export const deleteOneForeverCtrl = async (id: string): Promise<PublicStoredUser> => {
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
