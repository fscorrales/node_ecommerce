const { Router } = require("express");
const users_router = require("./users");
main_router = Router();

main_router.use("/users", users_router);

module.exports = main_router;
