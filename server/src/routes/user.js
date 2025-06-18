import { Router } from "express";
import User from "../models/user.js";
const userRouter= Router();

userRouter.get("/register", (req, res)=>{
    res.send("Welcome to Register");
});

userRouter.post("/register", async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) return res.send('Email already Taken');

        await User.create(req.body);
        return res.send("Register Successfully!");
    } catch (err) {
        return res.status(500).send("Error creating user");
    }
});



userRouter.get("/users", async (req, res)=>{
    const data= await User.find();
    return res.send(data);
});


export default userRouter;
