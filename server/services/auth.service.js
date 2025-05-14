import userModel from "../models/user.model.js";
import argon2 from "argon2";
export const registerUser = async (body) => {
    
            const hashPassword = await argon2.hash(body.password);        
            const newUser = new userModel({
            username: body.username,
            email: body.email,
            password: hashPassword,
        });

        await newUser.save();

        return newUser;
        

   
};


export const loginUser = async (body) => {
    const user = await userModel.findOne({email:body.email});
    !user && res.status(404).json("User not found");

    const passwordCheck = await argon2.verify(user.password, body.password);
    !passwordCheck && res.status(400).json("Wrong password");

    return user;
};