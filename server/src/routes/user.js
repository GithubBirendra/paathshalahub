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
    // const{email, password}= req.body
    const user= await User.findOne({email: req.body.email});
    if(!user) return res.send({message: "Email not found"});

    const isMatched= await bcrypt.compare(req.body.password, user.password)
     if(!isMatched) return res.send({message: 'Invalid password'})

        const token = jwt.sign({email: req.body.email}, '01d7c48e4f61708396ce07ca0fe2adc4bf27d6235ab729c037c33940b0f7a53a5bb72e6e7e6afc42e05e82c743b3b4df28665ecdab843da287851823c2de8533')
        console.log(token);
      return res.send({
          message: 'logged in successfully',
          user: user,
          isLoggedIn: true,
          token
        })
  })

userRouter.get("/users", async (req, res)=>{
    const data= await User.find();
    return res.send(data);
});


export default userRouter;
