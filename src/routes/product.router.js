const express = require("express");
const {
  deleteProduct,
  allProducts,
  addProduct,
  updateProduct,
  oneProduct,
  productPublished,
  allProductBased,
} = require("../controllers/product.controller")
const router = express.Router()

router.post("/product", addProduct);
router.get("/products", allProducts);
router.get("/product", oneProduct);
router.get("/product-based", allProductBased);
router.get("/published", productPublished);
router.patch("/update-product", updateProduct);
router.delete("/remove-product", deleteProduct);

module.exports = router