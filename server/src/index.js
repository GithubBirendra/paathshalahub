// const express = require('express')
import express from "express"
import connect from './db/connect.js'
import userRouter from './routes/user.js'
import cors from 'cors';
import dotenv from 'dotenv';
import courseRouter from "./routes/course.js";
dotenv.config();

const app = express();
const port = process.env.PORT


connect();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(courseRouter);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
