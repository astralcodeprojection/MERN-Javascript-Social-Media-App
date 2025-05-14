import express from "express";
import { createPostController, deletePostController, getPostController, getTimelinePostsController, likeAndDislikeController, updatePostController } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create-post", createPostController);
router.put("/update-post/:id", updatePostController);
router.delete("/delete-post/:id", deletePostController);
router.put("/post-reaction/:id", likeAndDislikeController);
router.get("/get-posts/:id", getPostController);
router.get("/get-timeline-posts/:id", getTimelinePostsController);


export default router;