const express = require("express");
const route = express.Router();
const {
  getAllImages,
  getImageById,
  insertImage,
  getRelatedImages
} = require("./../../models/imagesModel");
const { getUserById } = require("./../../models/users");



route.get("/", async (req, res) => {
  const result = await getAllImages();
  res.json({ message: "this is images", result });
});

route.get('/categories/:category', async (req, res) => {
  const category = req.params.category
  const relatedImages = await getRelatedImages(category);
  console.log(relatedImages)
  res.json({ message: "this is images category" , relatedImages });
});

route.get("/:id", async (req, res) => {
  const _id = req.params.id;
  if (!_id) return res.status(400).json({ message: "Bad Request" });
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
    res.json({ message: "mahdi alipour", result });
  } catch (error) {
    res.status(404).json({ message: "nothing found" });
  }
});



route.post("/", async (req, res) => {
  const { path, link, ownerId, alt, title, tags } = req.body;
  try {
    const imageObj = {
      path: path,
      link: link,
      likes: 0,
      ownerId: ownerId,
      alt: alt,
      title: title,
      tags: tags
    };
    await insertImage(imageObj);
    res.json({ message: "this is images" });
  } catch (err) {
    res.status(400).json({
      message: "please enter unique values for path or download link",
    });
  }
});

module.exports = route;