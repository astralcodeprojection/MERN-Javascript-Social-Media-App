import { deleteUser, followUser, getUser, updateUser } from "../services/user.service.js";

export const updateUserController = async (req, res) => {
    if (req.bod.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await updateUser(req.params.id, req.body);
            res.status(200).json({
                user,
                message:"Account Updated Successfully",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
            
    }else{
            res.status(500).json("You can only update your account")
    }

};

export const deleteUserController = async (req, res) => {
    if (req.bod.userId === req.params.id || req.body.isAdmin) {
        try {
            await deleteUser(req.params.id);
            res.status(200).json({
                user,
                message:"Account Deleted Successfully",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    } else{
        res.status(500).json("You can only delete your account")  
    }
};

export const getUserController = async (req, res) => {
        try {
            const user = await getUser(req.params.id);
            const {password, ...data} = user._doc
            res.status(200).json({
                data,
                message:"Account Found",
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
};

export const followUserController = async (req, res) => {
    try {
        const data = await followUser(req.body, req.params);
        res.status(200).json({
            data,
            message:"User Followed",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

export const unfollowUserController = async (req, res) => {
    try {
        const data = await unfollowUser(req.body, req.params);
        res.status(200).json({
            data,
            message:"User Unfollowed",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};