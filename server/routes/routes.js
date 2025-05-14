import express from "express";
import userRoutes from "./user.route.js";
import authRoutes from "./auth.route.js";
import postRoutes from "./post.route.js";

const router = express.Router();

const baseURL = "/api/v1";

// Register routes with distinct paths
router.use(`${baseURL}/users`, userRoutes);
router.use(`${baseURL}/auth`, authRoutes); 
router.use(`${baseURL}/posts`, postRoutes);  // Ensure this has a unique path

export default router;