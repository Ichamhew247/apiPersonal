// exports.login = async (req, res, next) => {
//   try {
//     console.log("Test Login");
//   } catch (err) {
//     console.log(err);
//   }
// };
// exports.register = async (req, res, next) => {
//   try {
//     console.log("Test register");
//   } catch (err) {
//     console.log(err);
//   }
// };

// const createError = require("../utils/createError");
const createError = require("../utils/createError");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.register = async (req, res, next) => {
  try {
    const { username, firstName, lastName, password } = req.body;

    if (!password) {
      createError("password is required", 400);
    }
    if (password.length < 6) {
      createError("password must be at least 6 characters", 400);
    }
    const hashedPassword = await bcrypt.hash(password, 10); // เรียกใช้ bcrypt ทำการ  hash มีเวลาในการ Hash // เป็น promise เลยมี await
    const user = await User.create({
      username: username,
      firstName: firstName,
      lastName: lastName,
      password: hashedPassword,
    });
    res.status(201).json({ message: "user created successfully", user });
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { oldPassword, newPassword, confirmNewPassword } = req.body;
    const user = req.user;

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      createError("invalid password", 400);
    }

    if (newPassword !== confirmNewPassword) {
      createError("new passwords do not match", 400);
    }
    if (!newPassword) {
      createError("new password is required", 400);
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const result = await User.update(
      {
        password: hashedPassword,
      },
      { where: { id: user.id } }
    );

    res.status(200).json({ message: "user updated successfully", result });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username) {
      createError("username is required", 400);
    }
    if (!password) {
      createError("password is required", 400);
    }

    // 2 FIND USER
    const user = await User.findOne({ where: { username: username } });
    if (!user) {
      createError("username or password is not correct", 400);
    }
    //3 CHECK PASSWORD
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      createError("username or password is not correct", 400);
    }
    //4 CREATE TOKEN
    const payload = { id: user.id, username: user.username };
    const SECRET_KEY = process.env.SECRET_KEY || "YOUR SECRET MESSAGE";

    const token = jwt.sign(payload, SECRET_KEY);

    res.json({ message: "login successfully", token: token });
    console.log(JSON.stringify(user, null, 2));
  } catch (error) {
    next(error);
  }
};

//ท่าพี่เจียง
exports.getMe = async (req, res, next) => {
  const { id, username } = req.user;

  console.log({ username });
  res.json({ id, username });
};

//async เพรราะต้องรอ Database ทำงาน
//next ใส่เพื่อ เผื่อเราจะเรียก MIDDLEWARES ตัวถัดไป
