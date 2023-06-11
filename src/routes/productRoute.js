const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/", productController.getProduct);
router.get("/:id", productController.getProductById);
router.patch("/:id", productController.updateProduct);
// router.delete("/", productController.deleteProduct);

// router.patch("/updateProduct", userController.updateProduct);
// router.post("/deleteProduct", userController.deleteProduct);
module.exports = router;
