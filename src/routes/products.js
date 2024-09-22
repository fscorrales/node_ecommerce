const { Router } = require("express");
const {
  get_all_products,
  get_one_product,
  create_product,
  update_product,
  delete_product,
} = require("../handlers/products");

const products_router = Router();

products_router.get("/", get_all_products);

products_router.get("/:id", get_one_product);

products_router.post("/", create_product);

products_router.put("/:id", update_product);

products_router.delete("/:id", delete_product);

module.exports = products_router;
