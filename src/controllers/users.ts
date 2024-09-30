import users_db from '../db/users.json'
import { UsersEntry } from '../types'

// Controlador para crear un nuevo usuario
// const createUserController = (name, username, email) => {
//   const id = users.length + 1; // Generar un ID único simple (incremental)
//   const newUser = { id, name, username, email };
//   users.push(newUser);
//   return newUser;
// };

const users: UsersEntry[] = users_db as UsersEntry[] // Controlador para obtener todos los usuarios
export const getAllUsersController = (): UsersEntry[] => users

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

// module.exports = {
//   createUserController,
//   getAllUsersController,
//   getOneUserController,
//   getUserByIdController,
// };
