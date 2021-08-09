const express = require("express");
const {
  insertLikeImage,
  getLikeImagesByImageId,
  getLikeImagesByUserId,
} = require( "./../../models/imageLikes");
const { updateImageByLike } = require( "./../../models/imagesModel");
const { body, param, validationResult } = require( "express-validator");

const route = express.Router();
route.get(
  "/:imageId",
  param("imageId").exists().isLength({ min: 2, max: 100 }),
  async (req, res) => {
    const imageId = req.params.imageId;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "please send correct information",
        errors: errors.array(),
      });
    }
    const request = await getLikeImagesByImageId(imageId);
    res.json({ message: "message", request });
  }
);

route.get(
  "/:userId",
  param("userId").exists().isLength({ min: 2, max: 100 }),
  async (req, res) => {
    const userId = req.params.userId;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "please send correct information",
        errors: errors.array(),
      });
    }
    const request = await getLikeImagesByUserId(userId);
    res.json({ message: "message", request });
  }
);

route.post(
  "/",
  body("imageId").exists().isLength({ min: 2, max: 100 }),
  body("userId").exists().isLength({ min: 2, max: 100 }),
  body("likesCount").exists(),
  async (req, res) => {
    const imageId = req.body.imageId;
    const userId = req.body.userId;
    const likeCount = req.body.likesCount;
    const data = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "please send correct information",
        errors: errors.array(),
      });
    }
    const ifLikedImage = await getLikeImagesByImageId(imageId, userId);
    if (ifLikedImage.length !== 0) {
      return res.json({ message: "you liked this image earlire" });
    }
    await insertLikeImage(data);
    const request = await updateImageByLike(imageId, likeCount);
    res.json({ message: "message", request });
  }
);

module.exports =route;
