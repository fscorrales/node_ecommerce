const create_user = (req, res) => {
  const { id, username, email, password, role } = req.body;
  res.send(`Crear usuario con el id: ${id}, username: ${username}, 
    email: ${email}, password: ${password}, role: ${role}`);
};

const get_all_users = (req, res) => {
  const { username } = req.query;
  if (username) {
    res.send(`Mostrar usuarios con el nombre: ${username}`);
  } else {
    res.send("Mostrar todos los usuarios");
  }
};

const get_one_user = (req, res) => {
  const { id } = req.params;
  res.send(`Mostrar usuario con el id: ${id}`);
};

const update_user = (req, res) => {
  res.send("Actualizar usuario");
};

const delete_user = (req, res) => {
  res.send("Eliminar usuario");
};

module.exports = {
  create_user,
  get_all_users,
  get_one_user,
  update_user,
  delete_user,
};
