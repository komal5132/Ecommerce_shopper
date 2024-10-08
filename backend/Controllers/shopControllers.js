const shopModel = require("../Models/shopModel.js");
const fs = require("fs");

const addProduct = async (req, res) => {
  const count = await shopModel.countDocuments();
  const productId = count + 1;

  let image_fileName = `${req.file.filename}`;

  const shop = new shopModel({
    name: req.body.name,
    category: req.body.category,
    old_price: req.body.old_price,
    new_price: req.body.new_price,
    image: image_fileName,
    productId: productId,
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
    fs.unlink(`uploads/${product.image}`, () => {});
    await shopModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "product deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "product not deleted" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const product = await shopModel.find();
    res.json({ success: true, data: product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "something went wrong" });
  }
};

const newCollections = async (req, res) => {
  let products = await shopModel.find({});
  let newCollection=products.slice(1).slice(-8)
  console.log("data fetched")
  res.json({success:true,data:newCollection})
};

const popular_in_women=async(req,res)=>{
  let products=await shopModel.find({category:"women"})
  let popular=products.slice(0,4)
  res.json({success:true,data:popular})
}

const relatedProducts = async (req, res) => {
  let products = await shopModel.find({});
  let relatedProducts=products.slice(7).slice(-8)
  console.log("data fetched")
  res.json({success:true,data:relatedProducts})
};

module.exports = { addProduct, deleteProduct, getAllProducts, newCollections,popular_in_women,relatedProducts };
