const shopModel = require("../Models/shopModel.js");
const fs=require("fs")

const addProduct = async (req, res) => {
  let image_fileName = `${req.file.filename}`;

  const shop = new shopModel({
    name: req.body.name,
    category: req.body.category,
    old_price: req.body.old_price,
    new_price: req.body.new_price,
    image: image_fileName,
  });

  try {
    await shop.save();
    res.json({ success: true, message: "product uploaded" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "product not uploaded" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await shopModel.findById(req.body.id);
    fs.unlink(`uploads/${product.image}`,()=>{})
    await shopModel.findByIdAndDelete(req.body.id)
    res.json({ success: true, message: "product deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "product not deleted" });
  }
};

const getAllProducts=async(req,res)=>{
   try {
    const product=await shopModel.find()
    res.json({success:true,data:product})
   } catch (error) {
    console.log(error)
    res.json({success:false,message:"something went wrong"})
   }
}

module.exports = { addProduct,deleteProduct,getAllProducts };
