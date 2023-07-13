const express = require("express");
const { getUserByToken } = require("../middleware/userAuthorize");
const userController = require("../controllers/userController");
const userMiddleware = require("../middleware/userAuthorize");
const router = express.Router();

router.post("/register", userController.register); // api/users/register
router.patch(
  "/update",
  userMiddleware.getUserByToken,
  userController.updateUser
); // api/users/update
router.post("/login", userController.login); // api/users/login
router.get("/getMe", getUserByToken, userController.getMe);
module.exports = router;
