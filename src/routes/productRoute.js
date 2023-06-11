const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/", productController.getProduct);

// router.patch("/updateProduct", userController.updateProduct);
// router.post("/deleteProduct", userController.deleteProduct);
module.exports = router;
