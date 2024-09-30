import { Request, Response } from 'express'
import * as usersControllers from '../controllers/users'
import { UsersEntry } from '../types'

export const createUser = (_req: Request, res: Response): void => {
  // const { id, username, email, password, role } = req.body
  // res.send(`Crear usuario con el id: ${id}, username: ${username},
  //   email: ${email}, password: ${password}, role: ${role}`)
  res.send('Crear usuario')
}

export const getAllUsers = (req: Request, res: Response): void => {
  const { username } = req.query as { username?: string }
  if ((username?.toString().trim() ?? '') !== '') {
    res.send(`Mostrar usuarios con el nombre: ${username ?? ''}`)
  } else {
    const allUsers: UsersEntry[] = usersControllers.getAllUsersController()
    // Verificar si hay usuarios
    if (allUsers.length === 0) {
      res.status(404).send('No hay usuarios disponibles.')
    } else {
      res.send(allUsers) // Enviar todos los usuarios
    }
  }
}

export const getOneUser = (req: Request, res: Response): void => {
  const { id } = req.params
  res.send(`Mostrar usuario con el id: ${id}`)
}

export const updateUser = (_: Request, res: Response): void => {
  res.send('Actualizar usuario')
}

export const deleteUser = (_: Request, res: Response): void => {
  res.send('Eliminar usuario')
}
