import { Request, Response } from 'express'
import * as usersControllers from '../controllers/users'
import { PrivateStoredUser } from '../types'

export const createOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password, role, image } = req.body
    await usersControllers.createOne({ username, email, password, role, image })
    // res.send(`Crear usuario con el id: ${id}, username: ${username},
    //   email: ${email}, password: ${password}, role: ${role}`)
    res.send('Crear usuario')
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

export const getAllActive = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username } = req.query as { username?: string }
    if ((username?.toString().trim() ?? '') !== '') {
      res.send(`Mostrar usuarios con el nombre: ${username ?? ''}`)
    } else {
      const allUsers: PrivateStoredUser[] = await usersControllers.getAll()
      // Verificar si hay usuarios
      if (allUsers.length === 0) {
        res.status(404).send('No hay usuarios disponibles.')
      } else {
        res.send(allUsers) // Enviar todos los usuarios
      }
    }
  } catch (error: any) {
    // Manejar cualquier error inesperado
    console.error(error.message)
    res
      .status(500)
      .send('Ocurrió un error inesperado. Intente nuevamente más tarde.')
  }
}

export const getOne = (req: Request, res: Response): void => {
  const { id } = req.params
  res.send(`Mostrar usuario con el id: ${id}`)
}

export const updateOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const userUpdated = await usersControllers.updateOne(id, req.body)
    res.status(200).json(userUpdated)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

export const deleteOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const userDeleted = await usersControllers.deleteOne(id)
    res.status(200).json(userDeleted)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

export const deleteOneForever = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const userDeleted = await usersControllers.deleteOneForever(id)
    res.status(200).json(userDeleted)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}
