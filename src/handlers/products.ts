import { Request, Response } from 'express'
import {
  createOneCtrl, getAllCtrl, getAllActiveCtrl, getOneCtrl,
  getAllDeletedCtrl, updateOneCtrl, deleteOneCtrl, deleteOneForeverCtrl
} from '../controllers/products'

export const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const allProducts = await getAllCtrl(req.query)
    if (allProducts.length === 0) {
      res.status(404).send('No hay productos disponibles.')
    } else {
      res.send(allProducts) // Enviar todos los usuarios
    }
  } catch (error: any) {
    // Manejar cualquier error inesperado
    console.error(error.message)
    res
      .status(500)
      .send('Ocurrió un error inesperado. Intente nuevamente más tarde.')
  }
}

export const getAllActive = async (req: Request, res: Response): Promise<void> => {
  try {
    const allProducts = await getAllActiveCtrl(req.query)
    // Verificar si hay usuarios
    if (allProducts.length === 0) {
      res.status(404).send('No hay productos disponibles.')
    } else {
      res.send(allProducts) // Enviar todos los usuarios
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
    const allProducts = await getAllDeletedCtrl(req.query)
    // Verificar si hay usuarios
    if (allProducts.length === 0) {
      res.status(404).send('No hay productos disponibles.')
    } else {
      res.send(allProducts) // Enviar todos los usuarios
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
    const product = await getOneCtrl(id)
    res.status(200).json(product)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

export const createOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const newProduct = await createOneCtrl(req.body)
    res.status(200).send(newProduct)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

export const updateOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const productUpdated = await updateOneCtrl(id, req.body)
    res.status(200).json(productUpdated)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

export const deleteOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const productDeleted = await deleteOneCtrl(id)
    res.status(200).json(productDeleted)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}

export const deleteOneForever = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const productDeleted = await deleteOneForeverCtrl(id)
    res.status(200).json(productDeleted)
  } catch (error: any) {
    res.status(500).send(error.message)
  }
}
