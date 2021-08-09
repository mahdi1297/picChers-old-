import express from "express";
import userRoutes from "./user";
import imagesRoutes from "./image";
import blogRoutes from "./blog";
import heroRouter from "./hero";
import commentsRouter from "./comments";
import imageLikesRoue from "./imageLikes";
import imageCategoryRouter from "./imageCategory";

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

export default route;
