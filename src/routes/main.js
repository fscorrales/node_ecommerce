const { Router } = require("express");
const users_router = require("./users");
const products_router = require("./products");
main_router = Router();

main_router.use("/users", users_router);
main_router.use("/products", products_router);

module.exports = main_router;
