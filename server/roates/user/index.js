const express = require("express");
const route = express.Router();
const {
  hashPassword,
  // comparePassword,
} = require("./../../helper/bcrypt.helper");
const {
  insertUser,
  getUserById,
  getUserByUsername,
  getAllUsers,
  updateUser,
} = require("./../../models/users");
const { getUserByOwnerId } = require("./../../models/imagesModel");

route.get("/", async (req, res) => {
  const users = await getAllUsers();
  res.json({ message: "this is message", users });
});

route.post("/register", async (req, res) => {
  const { name, lastname, username, email, profileimage, password } = req.body;

  if (!name || !lastname || !username || !password || !email)
    return res.status(400).json({ message: "bad request" });
  try {
    const hashPass = await hashPassword(password);
    const newUserObj = {
      name,
      lastname,
      email,
      username,
      profileimage,
      password: hashPass,
    };
    const result = await insertUser(newUserObj);
    console.log(result);
    res.json({ messag: "new User Created", result });
  } catch (error) {
    res.status(error.status).json({ status: error, messag: error.message });
  }
});

route.post("/login", async (req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Invalid request" });
  }
  const user = await getUserByUsername(username);

  const passwordFromDb = user && user._id ? user.password : null;

  if (!passwordFromDb) {
    return res
      .status(404)
      .json({ message: "user not found! username or password is wrong" });
  }

  if (!user) {
    return res.json({ message: "user not found" });
  }

  res.json({ message: "Successfully logedIn", user });
});

route.get("/:id", async (req, res) => {
  const _id = req.params.id;

  if (!_id) return res.status(404).json({ message: "user not found" });

  const user = await getUserById(`${_id}`);

  if (!user) return res.status(404).json({ message: "user not found" });

  res.json({ message: "this user", user });
});

route.get("/:user/:id", async (req, res) => {
  const id = req.params.id;
  const username = req.params.user;

  if (!id || !username) return res.status(400).json({ message: "Bad request" });

  const user = await getUserByUsername(username);
  const userId = user && user._id;

  const userImages = await getUserByOwnerId(userId);

  res.json({ message: "some messages here", userImages });
});

route.post("/user-update", async (req, res) => {
  const userObj = req.body;
  const id = userObj._id;

  try {
    const data = {
      username: userObj.username,
      name: userObj.name,
      lastname: userObj.lastname,
      description: userObj.description,
      profileimage: userObj.profileimage,
      permission: userObj.permission
    };
    const response = await updateUser(id, data);

    console.log(response)

    res.json({ message: "user updated successfully", response });
  } catch (error) {
    res.status(400).json({ message: "something went wron" });
  }
});

module.exports = route;
