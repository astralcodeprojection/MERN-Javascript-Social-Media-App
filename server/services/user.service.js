import argon2 from "argon2"
import userModel from "../models/user.model.js";

export const updateUser = async (userId, updateData) =>{
    if (updateData.password){
        try {
            updateData.password = await argon2.hash(updateData.password);
        } catch (err){
            throw err;
        }
    }
    try {
        const user = await userModel.findByIdAndUpdate(
            userId, 
            {
                $set:updateData,
            },
            {
                new: true,
            }
        );
        return user;
    } catch (err) {
        throw err;
    }
};

export const deleteUser = async (userId) =>{
    
    try {
        await userModel.findByIdAndDelete(userId);
    } catch (err) {
        throw err;
    }
};

export const getUser = async (userId) =>{
    try {
        const user = await userModel.findById(userId);
        return user;
    } catch (err) {
        throw err;
    }
};

export const followUser = async (userData, updateData) =>{
    if (userData.userId === updateData.id) {
        throw new Error("You cannot follow yourself");
    }else{
        try {
            const user = await userModel.findById(userData.userId);
            const currentUser = await userModel.findById(updateData.id);
            if(!user.followers.includes(userData.userId)) {
                await currentUser.updateOne({$push: {followers: userData.id}});
                await user.updateOne({$push: {following: updateData.id}});
                return {user, currentUser};
            }else{
                throw new Error ("You have already followed this user");
            }
        } catch (error) {
            throw error;
        } 
    }
    
};

export const unfollowUser = async (userData, updateData) =>{
    if (userData.userId === updateData.id) {
        throw new Error("You cannot unfollow yourself");
    }else{
        
        try {
            const user = await userModel.findById(userData.userId);
            const currentUser = await userModel.findById(updateData.id);
            if(!user.followers.includes(userData.userId)) {
                await currentUser.updateOne({$pull: {followers: userData.userId}}, {new: true});
                await user.updateOne({$pull: {following: updateData.id}}, {new: true});
                return {user, currentUser};
            }else{
                throw new Error ("You already do not follow this user");
            }
        } catch (error) {
            throw error;
        } 
    }
    
};