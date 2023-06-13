const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.post("/createProduct", productController.createProduct);
router.post("/search", productController.searchProduct);

router.get("/", productController.getProduct);
router.get("/:id", productController.getProductById);

router.patch("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
