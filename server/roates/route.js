const express = require("express");
const route = express.Router();
const imagesRoutes = require("./image");
const userRoutes = require("./user");
const blogRoutes = require("./blog");
const heroRouter = require("./hero");
const commentsRouter = require("./comments");
const imageLikesRoue = require('./imageLikes')
const imageCategoryRouter = require('./imageCategory')

route.use("/images", imagesRoutes);

route.use("/user", userRoutes);

route.use("/blog", blogRoutes);

route.use("/hero", heroRouter);

route.use("/comments", commentsRouter);

route.use('/image-likes', imageLikesRoue)

route.use('/image-category', imageCategoryRouter)

route.use("/", (req, res) => {
  res.json({ message: "this is home" });
});


module.exports = route;