const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    res.json({ success: false, meassage: "token not identified" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.jwt_secret_key);
  req.body.userId = token_decode.id;
  next();
  } catch (error) {
    res.json({ success: false, meassage: "problem with token" });
  }
};

module.exports=authMiddleware