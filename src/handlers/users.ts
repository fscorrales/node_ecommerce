import { Request, Response } from "express";

const create_user = (req: Request, res: Response) => {
  const { id, username, email, password, role } = req.body;
  res.send(`Crear usuario con el id: ${id}, username: ${username}, 
    email: ${email}, password: ${password}, role: ${role}`);
};

const get_all_users = (req: Request, res: Response) => {
  const { username } = req.query;
  if (username) {
    res.send(`Mostrar usuarios con el nombre: ${username}`);
  } else {
    res.send("Mostrar todos los usuarios");
  }
};

const get_one_user = (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Mostrar usuario con el id: ${id}`);
};

const update_user = (_: Request, res: Response) => {
  res.send("Actualizar usuario");
};

const delete_user = (_: Request, res: Response) => {
  res.send("Eliminar usuario");
};

export const users_handlers = {
  create_user,
  get_all_users,
  get_one_user,
  update_user,
  delete_user,
};
