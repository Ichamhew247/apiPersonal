const express = require("express");
const userController = require("../controllers/user-controller");
const router = express.Router();

router.get("/login", userController.getUserProfile);

module.exports = router;
