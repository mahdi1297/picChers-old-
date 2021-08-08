const express = require("express");
const route = express.Router();
const {
  insertLikeImage,
  getLikeImagesByImageId,
  getLikeImagesByUserId,
} = require("./../../models/imageLikes");
const { updateImageByLike } = require("./../../models/imagesModel");

//get by image id
route.get("/:imageId", async (req, res) => {
  const imageId = req.params.imageId;
  if (!imageId) return new res.status(400).json({ message: "bad request" });

  const request = await getLikeImagesByImageId(imageId);

  res.json({ message: "message", request });
});

//get by user id
route.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  if (!userId) return new res.status(400).json({ message: "bad request" });

  const request = await getLikeImagesByUserId(userId);

  res.json({ message: "message", request });
});

//create
route.post("/", async (req, res) => {
  const imageId = req.body.imageId;
  const userId = req.body.userId;
  const likeCount = req.body.likesCount;
  const data = req.body;

  if (!imageId || !userId || !likeCount)
    return res.status(400).json({ message: "bad request" });

  const ifLikedImage = await getLikeImagesByImageId(imageId, userId);

  if (ifLikedImage.length !== 0) {
    return res.json({ message: "you liked this image earlire" });
  }

  await insertLikeImage(data);

  const request = await updateImageByLike(imageId, likeCount);
  res.json({ message: "message", request });
});

module.exports = route;
