import { Request, Response } from 'express'
import {
  createOneCtrl, getOneCtrl, getAllCtrl, getAllActiveCtrl,
  getAllDeletedCtrl, updateOneCtrl, deleteOneCtrl, deleteOneForeverCtrl
} from '../controllers/users'
import { JwtPayload, verify } from 'jsonwebtoken'
import { JWT_SECRET } from '../config/base_config'

export const createOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser = await createOneCtrl(req.body)
    res.status(200).send(newUser)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

export const getAllActive = async (req: Request, res: Response): Promise<void> => {
  try {
    const allUsers = await getAllActiveCtrl(req.query)
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

export const getAllDeleted = async (req: Request, res: Response): Promise<void> => {
  try {
    const allUsers = await getAllDeletedCtrl(req.query)
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
    const allUsers = await getAllCtrl(req.query)
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
    const user = await getOneCtrl(id)
    res.status(200).json(user)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

export const getMe = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.cookies.access_token
    const userLogged = verify(token, JWT_SECRET) as JwtPayload
    const user = await getOneCtrl(userLogged.id)
    res.status(200).json(user)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

export const updateOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const userUpdated = await updateOneCtrl(id, req.body)
    res.status(200).json(userUpdated)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

export const deleteOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const userDeleted = await deleteOneCtrl(id)
    res.status(200).json(userDeleted)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

export const deleteOneForever = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const userDeleted = await deleteOneForeverCtrl(id)
    res.status(200).json(userDeleted)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}
