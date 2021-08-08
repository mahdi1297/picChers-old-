const express = require("express");
const {
  getSuitable,
  getAll,
  create,
  update,
} = require("./../../models/imageCategory");

const route = express.Router();

route.get("/", async (req, res) => {
  const imageCategories = await getAll();
  res.json({ message: "image categories", imageCategories });
});

route.get("/all", async (req, res) => {
  const imageCategories = await getSuitable();
  res.json({ message: "image categories", imageCategories });
});

route.post("/", async (req, res) => {
  const { title, slug } = req.body;
  if (!title || !slug) return res.status(400).json({ message: "Bad request" });

  console.log(title, slug);
  const data = {
    title: title,
    slug: slug,
  };
  const request = await create(data);

  res.json({ message: "image categories", request });
});

route.post("/update", async (req, res) => {
  const {_id, isRemoved} = req.body;
  if (!_id) return res.status(400).json({ message: "Bad request" });
  const request = await update(_id, isRemoved);

  res.json({ message: "image categories", request });
});

module.exports = route;
