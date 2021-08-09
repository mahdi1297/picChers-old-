const express = require("express");
const userRoutes = require("./user");
const imagesRoutes = require("./image");
const blogRoutes = require("./blog");
const heroRouter = require("./hero");
const commentsRouter = require("./comments");
const imageLikesRoue = require("./imageLikes");
const imageCategoryRouter = require("./imageCategory");

const route = express.Router();

route.use("/images", imagesRoutes);

route.use("/user", userRoutes);

route.use("/blog", blogRoutes);

route.use("/hero", heroRouter);

route.use("/comments", commentsRouter);

route.use("/image-likes", imageLikesRoue);

route.use("/image-category", imageCategoryRouter);

route.use("/", (req, res) => {
  res.json({ message: "this is home" });
});

module.exports = route;
