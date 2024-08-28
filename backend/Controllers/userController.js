const userModel = require("../Models/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.jwt_secret_key);
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      res.json({ success: false, message: "user not identified" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.json({ success: false, message: "password invalid" });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(first);
    res.json({ success: false, message: "somthing went wrong" });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    const exists = await userModel.findOne({ email });
    if (exists) {
      res.json({ success: false, message: "user already exists" });
    }

    if (!validator.isEmail(email)) {
      res.json({ success: false, message: "invalid email" });
    }

    if (password.length < 8) {
      res.json({ success: false, message: "password is not strong" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "something went wrong" });
  }
};

module.exports = { loginUser, registerUser };
