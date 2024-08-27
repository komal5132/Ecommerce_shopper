const mongoose=require("mongoose")

const ProductSchema=new mongoose.Schema({
    name:{type:String,required:true},
    category:{type:String,required:true},
    old_price:{type:Number,required:true},
    new_price:{type:Number,required:true},
    image:{type:String,required:true}
})

const shopModel=mongoose.models.shop || mongoose.model("shop",ProductSchema)

module.exports=shopModel