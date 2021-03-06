const express = require("express");
const { getUserById } = require("./../../models/users");
const { body, param, validationResult } = require("express-validator");
const {
  getAllImages,
  getImageById,
  insertImage,
  getRelatedImages,
  getImagesByTag,
} = require("./../../models/imagesModel");

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const result = await getAllImages();
    if (result.length === 0) {
      return res.status(400).json({ message: "no image found" });
    }
    res.json({ status: 200, result });
  } catch (err) {
    res.status(400).json({ message: "Something bad happened", err });
  }
});

route.get(
  "/categories/:tag",
  param("tag").exists().isLength({ min: 2, max: 450 }),
  async (req, res) => {
    const tags = req.query.array.split(",");
    const relatedImages = await getRelatedImages(tags);
    res.json({ message: "this is images category", relatedImages });
  }
);
route.get(
  "/category/:tag",
  param("tag").exists().isLength({ min: 2, max: 450 }),
  async (req, res) => {
    const tag = req.params;

    try {
      const images = await getImagesByTag(tag);

      res.json({ status: 200, images });
    } catch (err) {
      res.status(400).json({ message: "Something bad happened" });
    }
  }
);

route.get(
  "/:id",
  param("id").exists().isLength({ min: 2, max: 60 }),
  async (req, res) => {
    const _id = req.params.id;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "something bad happend",
        errors: errors.array(),
      });
    }

    try {
      const imageFromDb = await getImageById(_id);
      const userFromDb = await getUserById(imageFromDb.ownerId);
      const result = {
        _id: imageFromDb._id,
        path: imageFromDb.path,
        link: imageFromDb.link,
        likes: imageFromDb.likes,
        ownerId: imageFromDb.ownerId,
        alt: imageFromDb.alt,
        title: imageFromDb.title,
        tags: imageFromDb.tags,
        owner: {
          _id: userFromDb._id,
          name: userFromDb.name,
          lastname: userFromDb.lastname,
          role: userFromDb.role,
          totallikes: userFromDb.totallikes,
          profileimage: userFromDb.profileimage,
        },
      };
      res.json({ status: 200, result });
    } catch (error) {
      res.status(404).json({ message: "nothing found" });
    }
  }
);

route.post(
  "/",
  body("path").exists().isLength({ min: 2, max: 2000 }),
  body("link").exists().isLength({ min: 2, max: 2000 }),
  body("ownerId").exists().isLength({ min: 2, max: 60 }),
  body("alt").exists().isLength({ min: 2, max: 450 }),
  body("title").exists().isLength({ min: 2, max: 450 }),
  body("tags").exists(),
  async (req, res) => {
    const { path, link, ownerId, alt, title, tags } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "something bad happend",
        errors: errors.array(),
      });
    }

    try {
      const imageObj = {
        path: path,
        link: link,
        likes: 0,
        ownerId: ownerId,
        alt: alt,
        title: title,
        tags: tags,
      };
      await insertImage(imageObj);
      res.json({ message: "this is images" });
    } catch (err) {
      res.status(400).json({
        message: "please enter unique values for path or download link",
      });
    }
  }
);
module.exports = route;
