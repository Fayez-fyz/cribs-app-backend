import express from "express";


const router = express.Router();

//from middlewares
import { requiresSignin } from "../middlewares";

//from controllers
import { createPost, deletePost, getPost, updatePost } from "../controllers/post";

router.get("/cribs", requiresSignin, getPost);
router.post(
  "/cribs",
  requiresSignin, createPost
);
router.put('/cribs/:_id',requiresSignin,updatePost)
router.delete('/cribs/:_id',requiresSignin,deletePost)

module.exports = router;
