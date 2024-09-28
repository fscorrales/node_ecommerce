import { Router } from "express";
import { products_handlers } from "../handlers/products";

const {
  get_all_products,
  get_one_product,
  create_product,
  update_product,
  delete_product,
} = products_handlers;

const products_router = Router();

products_router.get("/", get_all_products);

products_router.get("/:id", get_one_product);

products_router.post("/", create_product);

products_router.put("/:id", update_product);

products_router.delete("/:id", delete_product);

export default products_router;
