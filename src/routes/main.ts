import { Router } from "express";
import products_router from "./products";
import users_router from "./users";

const main_router = Router();

main_router.use("/users", users_router);
main_router.use("/products", products_router);

export default main_router;
