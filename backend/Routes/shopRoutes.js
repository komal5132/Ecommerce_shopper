const express=require("express")
const {addProduct, deleteProduct, getAllProducts}=require("../Controllers/shopControllers.js")
const multer=require("multer")
const ShopRouter=express.Router()

const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

ShopRouter.post('/add',upload.single("image"),addProduct)
ShopRouter.post("/delete",deleteProduct)
ShopRouter.post('/get',getAllProducts)

module.exports=ShopRouter