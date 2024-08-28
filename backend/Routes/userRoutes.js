const express=require("express")
const { loginUser, registerUser } = require("../Controllers/userController")
const userRouter=express.Router()

userRouter.post("/login",loginUser)
userRouter.post("/register",registerUser)

module.exports=userRouter