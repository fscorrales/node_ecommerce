import { Request, Response } from 'express'
import * as usersControllers from '../controllers/users'
import { PublicStoredUser } from '../types'

export const createOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser = await usersControllers.createOneCtrl(req.body)
    res.status(200).send(newUser)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

export const getAllActive = async (req: Request, res: Response): Promise<void> => {
  try {
    const allUsers: PublicStoredUser[] = await usersControllers.getAllActiveCtrl(req.query)
    // Verificar si hay usuarios
    if (allUsers.length === 0) {
      res.status(404).send('No hay usuarios disponibles.')
    } else {
      res.send(allUsers) // Enviar todos los usuarios
    }
  } catch (error: any) {
    // Manejar cualquier error inesperado
    console.error(error.message)
    res
      .status(500)
      .send('Ocurrió un error inesperado. Intente nuevamente más tarde.')
  }
}

export const getAllDeleted = async (_: Request, res: Response): Promise<void> => {
  try {
    const allUsers: PublicStoredUser[] = await usersControllers.getAllDeletedCtrl()
    // Verificar si hay usuarios
    if (allUsers.length === 0) {
      res.status(404).send('No hay usuarios disponibles.')
    } else {
      res.send(allUsers) // Enviar todos los usuarios
    }
  } catch (error: any) {
    // Manejar cualquier error inesperado
    console.error(error.message)
    res
      .status(500)
      .send('Ocurrió un error inesperado. Intente nuevamente más tarde.')
  }
}

export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const allUsers: PublicStoredUser[] = await usersControllers.getAllCtrl(req.query)
    // Verificar si hay usuarios
    if (allUsers.length === 0) {
      res.status(404).send('No hay usuarios disponibles.')
    } else {
      res.send(allUsers) // Enviar todos los usuarios
    }
  } catch (error: any) {
    // Manejar cualquier error inesperado
    console.error(error.message)
    res
      .status(500)
      .send('Ocurrió un error inesperado. Intente nuevamente más tarde.')
  }
}

export const getOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const user = await usersControllers.getOne(id)
    res.status(200).json(user)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

export const updateOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const userUpdated = await usersControllers.updateOneCtrl(id, req.body)
    res.status(200).json(userUpdated)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

export const deleteOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const userDeleted = await usersControllers.deleteOneCtrl(id)
    res.status(200).json(userDeleted)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

export const deleteOneForever = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const userDeleted = await usersControllers.deleteOneForeverCtrl(id)
    res.status(200).json(userDeleted)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}
