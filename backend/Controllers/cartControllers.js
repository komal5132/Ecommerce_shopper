const userModel = require("../Models/userModel.js");
const { use } = require("../Routes/cartRoutes.js");

const addProduct = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    let cartData = user.cartdata || {};
    const itemId = req.body.itemId;
    console.log("ItemId:", itemId);
    if (!itemId) {
      return res.json({ success: false, message: "Invalid item ID" });
    }

    // Increment or initialize the product quantity
    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    // Update the user's cart data
    await userModel.findByIdAndUpdate(req.body.userId, { cartdata: cartData }, { new: true });

    return res.json({ success: true, data: cartData });
  } catch (error) {
    console.error("Error in addProduct:", error);
    return res.json({ success: false, message: "Error adding product to cart" });
  }
};
const removeProduct = async (req, res) => {
  const user = await userModel.findOne({ _id: req.body.userId });
  const cartData = await user.cartdata;
  if (cartData[req.body.itemId] > 0) {
    cartData[req.body.itemId] -= 1;
  }
  await userModel.findByIdAndUpdate(req.body.userId, { cartdata: cartData }),
    { new: true };
  res.json({ success: true, message: "item delted" });
};

// const fetchProducts = async (req, res) => {
//   const user = await userModel.findOne({ _id: req.body.userId });
//   const cartData = await user.cartdata;
//   res.json({ success: true, userId: req.body.userId, cardata: cartData });
// };

const fetchProducts = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    const cartData = user.cartdata || {}; // Ensure cartdata exists
    res.json({ success: true, data: cartData });
  } catch (error) {
    console.error("Error fetching cart data:", error);
    res.json({ success: false, message: "Error fetching cart data" });
  }
};


module.exports = { addProduct, removeProduct, fetchProducts };
