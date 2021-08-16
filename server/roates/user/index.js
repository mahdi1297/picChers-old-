const express = require("express");
const { body, param, validationResult } = require("express-validator");
const {
  hashPassword,
  comparePassword,
} = require("./../../../helper/bcrypt.helper");
const {
  insertUser,
  getUserById,
  getUserByUsername,
  getAllUsers,
  updateUser,
  getImagesCreatedByUser,
  getUserByUsernameAndEmail,
} = require("./../../models/users");
const {
  getUserByOwnerId,
  getAllImageLikes,
} = require("./../../models/imagesModel");
const { signJwt } = require("./../../../helper/jwt");

const route = express.Router();

route.get("/", async (req, res) => {
  const users = await getAllUsers();
  res.json({ message: "this is message", users });
});

route.post(
  "/register",
  body("email").isEmail(),
  body("name").exists().isLength({ min: 2, max: 300 }),
  body("lastname").exists().isLength({ min: 2, max: 300 }),
  body("username").exists().isLength({ min: 2, max: 300 }),
  body("password").exists().isLength({ min: 5, max: 300 }),
  async (req, res) => {
    const { name, lastname, username, email, password } =
      req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "please send correct information",
        errors: errors.array(),
      });
    }
    try {
      const hashPass = await hashPassword(password);
      const newUserObj = {
        name,
        lastname,
        email,
        username,
        password: hashPass,
      };
      const result = await insertUser(newUserObj);
      res.json({ messag: "new User Created", result });
    } catch (error) {
      res.status(error.status).json({ status: error, messag: error.message });
    }
  }
);

route.post(
  "/logintoken",
  body("username").exists().isLength({ min: 2, max: 300 }),
  body("password").exists().isLength({ min: 2, max: 300 }),
  async (req, res, next) => {
    const { username, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "please send correct information",
        errors: errors.array(),
      });
    }
    const user = await getUserByUsername(username);
    if (!user.email) {
      return res
        .status(404)
        .json({ message: "user not found! username or password is wrong" });
    }
    const token = await signJwt(username, user.email);
    const passwordFromDb = user && user._id ? user.password : null;
    if (!passwordFromDb) {
      return res
        .status(404)
        .json({ message: "user not found! username or password is wrong" });
    }
    const comparePasswords = await comparePassword(password, passwordFromDb);
    if (!comparePasswords) {
      return res
        .status(404)
        .json({ message: "user not found! username or password is wrong" });
    }
    if (!user) {
      return res.json({ message: "user not found" });
    }
    res.json({ status: 200, token });
  }
);

route.post(
  "/user-validation",
  body("username").exists().isLength({ min: 2, max: 300 }),
  body("email").isEmail(),
  async (req, res, next) => {
    const { username, email } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "please send correct information",
        errors: errors.array(),
      });
    }
    const user = await getUserByUsernameAndEmail(username, email);
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    const userData = {
      _id: user._id,
      description: user.description,
      totallikes: user.totallikes,
      totalposts: user.totalposts,
      role: user.role,
      permission: user.permission,
      profileimage: user.profileimage,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      username: user.username,
    };
    res.json({ status: 200, userData });
  }
);

route.get(
  "/:id",
  param("id").exists().isLength({ min: 2, max: 300 }),
  async (req, res) => {
    const _id = req.params.id;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "please send correct information",
        errors: errors.array(),
      });
    }
    try {
      let likeObj = [];
      let userRole;
      const getImages = await getImagesCreatedByUser(_id);
      const userData = await getUserById(`${_id}`);
      const allLikes = await getAllImageLikes(_id);
      const totalLikes = allLikes.filter((x) => x.ownerId === _id);
      totalLikes.forEach((item) => likeObj.push(item.likes));
      const reducer = (accumulator, curr) => accumulator + curr;
      const likesSum = likeObj.reduce(reducer);
      if (!userData) return res.status(404).json({ message: "user not found" });
      if (likesSum < 500) {
        userRole = "begginer";
      }
      if (likesSum > 500 && likesSum < 5000) {
        userRole = "intermediate";
      }
      if (likesSum > 5000 && likesSum < 20000) {
        userRole = "professional";
      }
      if (likesSum > 2000) {
        userRole = "expert";
      }
      const user = {
        _id: userData._id,
        profileimage: userData.profileimage,
        description: userData.description,
        totallikes: likesSum,
        totalposts: getImages,
        role: userRole,
        permission: userData.permission,
        name: userData.name,
        lastname: userData.lastname,
        email: userData.email,
        username: userData.username,
      };
      res.json({ status: 200, user });
    } catch (err) {
      res.status(400).json({ message: "something bad happened" });
    }
  }
);

route.get(
  "/:user/:id",
  param("id").exists().isLength({ min: 2, max: 300 }),
  param("user").exists().isLength({ min: 2, max: 300 }),
  async (req, res) => {
    // eslint-disable-next-line no-unused-vars
    const id = req.params.id;
    const username = req.params.user;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "please send correct information",
        errors: errors.array(),
      });
    }
    try {
      const user = await getUserByUsername(username);
      const userId = user && user._id;
      const userImages = await getUserByOwnerId(userId);
      res.json({ status: 200, userImages });
    } catch (err) {
      res.status(400).json({ message: "something went wron" });
    }
  }
);

route.post(
  "/user-update",
  body("_id").exists().isLength({ min: 2, max: 300 }),
  body("name").exists().isLength({ min: 2, max: 300 }),
  body("lastname").exists().isLength({ min: 2, max: 300 }),
  body("description").exists().isLength({ min: 2, max: 1500 }),
  body("profileimage").exists().isLength({ min: 2, max: 1500 }),
  async (req, res) => {
    const userObj = req.body;
    const id = userObj._id;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "please send correct information",
        errors: errors.array(),
      });
    }
    try {
      const data = {
        username: userObj.username,
        name: userObj.name,
        lastname: userObj.lastname,
        description: userObj.description,
        profileimage: userObj.profileimage,
        permission: userObj.permission,
      };
      const response = await updateUser(id, data);

      res.json({ message: "user updated successfully", response });
    } catch (error) {
      res.status(400).json({ message: "something went wron" });
    }
  }
);

module.exports = route;
