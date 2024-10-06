import { Request, Response } from 'express'
import { createOneCtrl, getAllCtrl } from '../controllers/products'

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

export const getOne = (req: Request, res: Response): void => {
  const { id } = req.params
  res.send(`Mostrar producto con el id: ${id}`)
}

export const createOne = (req: Request, res: Response): void => {
  const newProduct = createOneCtrl(req.body)
  res.send(newProduct)
}

export const updateOne = (_: Request, res: Response): void => {
  res.send('Actualizar producto')
}

export const deleteOne = (_: Request, res: Response): void => {
  res.send('Eliminar producto')
}
