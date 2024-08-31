const express=require("express")
const { addProduct, removeProduct, fetchProducts } = require("../Controllers/cartControllers")
const authMiddleware = require("../middleware/auth")
const cartRouter=express.Router()

cartRouter.post("/addProduct",authMiddleware,addProduct)
cartRouter.post("/removeProduct",authMiddleware,removeProduct)
cartRouter.post("/fetchProduct",authMiddleware,fetchProducts)

module.exports=cartRouter