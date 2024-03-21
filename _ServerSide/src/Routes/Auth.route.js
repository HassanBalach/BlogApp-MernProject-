import { Router } from "express";
import {
  getUser,
  userRegister,
  userLogin,
  updateUser,
  deleteUser,
} from "../Controllers/User.controller.js";

import {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getAllPosts,
} from "../Controllers/Post.controller.js";

import {
  createCategory,
  getCategory,
} from "../Controllers/Category.controller.js";



const router = Router();

//All route are for user:

router.post("/register", userRegister);
router.post("/login", userLogin);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/users/:id", getUser);

//Route For Post

router.get("/posts", getAllPosts);
router.post("/posts", createPost);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);
router.get("/posts/:id", getPost);

//ROUTES FOR CATEGORY:
router.post("/category", createCategory);
router.get("/category", getCategory);

//ROUTERS FOR MULTER

export { router };
