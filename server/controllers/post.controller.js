import { createPost, getTimelinePosts, likeAndDislike } from "../services/post.service.js";

export const createPostController = async (req, res)=>{
    try {
        const newPost = await createPost(req.body);
        res.status(200).json({
            newPost,
            message:"Post has been created",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Failed to Post",
            err,}
        );
    }
};

export const updatePostController = async (req, res)=>{
    try {
        const updatedPost = await createPost(req.params, req.body);
        res.status(200).json({
            updatedPost,
            message:"Post has been updated",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Post update failed",
            err,}
        );
    }
};

export const deletePostController = async (req, res)=>{
    try {
        const deletedPost = await deletePost(req.params, req.body);
        res.status(200).json({
            deletedPost,
            message:"Post has been deleted",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Post deletion failed",
            err,}
        );
    }
};

export const likeAndDislikeController = async (req, res)=>{
    try {
        const post = await likeAndDislike(req.params, req.body);
        res.status(200).json({
            post,
            message:"Post Reacted To",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Post Like or Dislike failed",
            err,}
        );
    }
};

export const getPostController = async (req, res)=>{
    try {
        const post = await getPost(req.params);
        res.status(200).json({
            post,
            message:"Posts Loaded Successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Unable To Get Posts",
            err,}
        );
    }
};

export const getTimelinePostsController = async (req, res)=>{
    try {
        const timelinePosts = await getTimelinePosts(req.body);
        res.status(200).json({
            timelinePosts,
            message:"Timeline Posts Loaded",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Unable To Get Posts",
            err,}
        );
    }
};