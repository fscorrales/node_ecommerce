import { Router } from "express";
import { users_handlers } from "../handlers/users";

const { create_user, get_all_users, get_one_user, update_user, delete_user } =
  users_handlers;

const users_router: Router = Router();

users_router.post("/", create_user);

users_router.get("/", get_all_users);

users_router.get("/:id", get_one_user);

users_router.put("/:id", update_user);

users_router.delete("/:id", delete_user);

export default users_router;
