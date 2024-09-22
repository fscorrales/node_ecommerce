const { Router } = require("express");
const {
  create_user,
  get_all_users,
  get_one_user,
  update_user,
  delete_user,
} = require("../handlers/users");

const users_router = Router();

users_router.post("/", create_user);

users_router.get("/", get_all_users);

users_router.get("/:id", get_one_user);

users_router.put("/:id", update_user);

users_router.delete("/:id", delete_user);

module.exports = users_router;
