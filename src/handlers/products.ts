import { Request, Response } from 'express'

export const getAllProducts = (_: Request, res: Response): void => {
  res.send('Mostrar todos los productos')
}

export const getOneProduct = (req: Request, res: Response): void => {
  const { id } = req.params
  res.send(`Mostrar producto con el id: ${id}`)
}

export const createProduct = (req: Request, res: Response): void => {
  const { id, name, price }: { id: number, name: string, price: number } = req.body
  res.send(`Crear producto con el id: ${id}, name: ${name}, price: ${price}`)
}

export const updateProduct = (_: Request, res: Response): void => {
  res.send('Actualizar producto')
}

export const deleteProduct = (_: Request, res: Response): void => {
  res.send('Eliminar producto')
}
