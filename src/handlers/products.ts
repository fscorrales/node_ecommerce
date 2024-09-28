import { Request, Response } from "express";

const get_all_products = (_: Request, res: Response) => {
  res.send("Mostrar todos los productos");
};

const get_one_product = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Mostrar producto con el id: ${id}`);
};

const create_product = (req: Request, res: Response) => {
  const { id, name, price } = req.body;
  res.send(`Crear producto con el id: ${id}, name: ${name}, price: ${price}`);
};

const update_product = (_: Request, res: Response) => {
  res.send("Actualizar producto");
};

const delete_product = (_: Request, res: Response) => {
  res.send("Eliminar producto");
};

export const products_handlers = {
  get_all_products,
  get_one_product,
  create_product,
  update_product,
  delete_product,
};
