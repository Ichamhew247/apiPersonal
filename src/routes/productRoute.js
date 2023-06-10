const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/createProduct", userController.createProduct);
router.patch("/updateProduct", userController.updateProduct);
router.post("/deleteProduct", userController.deleteProduct);
module.exports = router;
