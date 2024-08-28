const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ShopRouter = require("./Routes/shopRoutes");
require("dotenv").config();

const app = express();
const db_uri = process.env.MongoDb_Connection;
const port = process.env.PORT_NO;

app.use(express.json());
app.use(cors());
app.use("/api/shop", ShopRouter);
app.use("/images", express.static("uploads"));

mongoose.connect(db_uri).then(() => {
  console.log("data base is connected");
});

app.listen(port, () => {
  console.log("server is running at==", port);
});

app.get("/", (req, res) => {
  res.send("hello server is working");
});
