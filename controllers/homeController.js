// controllers/homeController.js
const Product = require("../models/Product");

exports.getHome = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
