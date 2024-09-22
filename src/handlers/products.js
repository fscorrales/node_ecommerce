const get_all_products = (req, res) => {
  res.send("Mostrar todos los productos");
};

const get_one_product = (req, res) => {
  const { id } = req.params;
  res.send(`Mostrar producto con el id: ${id}`);
};

const create_product = (req, res) => {
  const { id, name, price } = req.body;
  res.send(`Crear producto con el id: ${id}, name: ${name}, price: ${price}`);
};

const update_product = (req, res) => {
  res.send("Actualizar producto");
};

const delete_product = (req, res) => {
  res.send("Eliminar producto");
};

module.exports = {
  get_all_products,
  get_one_product,
  create_product,
  update_product,
  delete_product,
};
