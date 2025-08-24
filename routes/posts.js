import express from "express";
const router = express.Router();
import {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

router.post("/", createPost);
router.get("/", getPosts);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
