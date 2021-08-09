const express = require("express");
const {
  getSuitable,
  getAll,
  create,
  update,
} = require("./../../models/imageCategory");
const route = express.Router();
const { body, validationResult } = require("express-validator");

route.get("/", async (req, res) => {
  const imageCategories = await getAll();
  res.json({ message: "image categories", imageCategories });
});

route.get("/all", async (req, res) => {
  const imageCategories = await getSuitable();
  res.json({ message: "image categories", imageCategories });
});

route.post(
  "/",
  body("title").exists().isLength({ min: 2, max: 450 }),
  body("slug").exists().isLength({ min: 2, max: 550 }),
  async (req, res) => {
    const { title, slug } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "please send correct information",
        errors: errors.array(),
      });
    }

    const data = {
      title: title,
      slug: slug,
    };
    const request = await create(data);
    res.json({ message: "image categories", request });
  }
);

route.post(
  "/update",
  body("_id").exists().isLength({ min: 2, max: 60 }),
  body("isRemoved").exists().isBoolean(),
  async (req, res) => {
    const { _id, isRemoved } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "something bad happends",
        errors: errors.array(),
      });
    }

    if (!_id) return res.status(400).json({ message: "Bad request" });
    const request = await update(_id, isRemoved);
    res.json({ message: "image categories", request });
  }
);

module.exports = route;
