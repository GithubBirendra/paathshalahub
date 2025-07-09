import { Router } from "express";
import bcrypt from "bcrypt"
const saltRounds= 10
import jwt from "jsonwebtoken"
import User from "../models/user.js";
const userRouter= Router();

userRouter.get("/register", (req, res)=>{
    res.send("Welcome to Register");
});

userRouter.post("/register", async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) return res.send('Email already Taken');
            else{
                req.body.password = await bcrypt.hash(req.body.password, saltRounds)

        await User.create(req.body);
            }
        return res.send("Register Successfully!");
    } catch (err) {
        return res.status(500).send("Error creating user");
    }
});

userRouter.post("/login", async(req, res)=>{
    const user= await User.findOne({email: req.body.email});
    if(!user) return res.send({message: "Email not found", isLoggedIn: false});

    const isMatched= await bcrypt.compare(req.body.password, user.password)
     if(!isMatched) return res.send({message: 'Invalid password', isLoggedIn: false})

        const token = jwt.sign({email: req.body.email}, process.env.JWT_SECRET)
      return res.send({
          message: 'logged in successfully',
          isLoggedIn: true,
          token,
          user:{
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
          }
        });
  });

userRouter.get("/users", async (req, res)=>{
    const data= await User.find();
    return res.send(data);
});


export default userRouter;
