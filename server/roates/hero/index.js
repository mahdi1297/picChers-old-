const express = require("express");
const route = express.Router();
const { getHeroImage, insertHeroImage } = require("./../../models/hero");
const { body, validationResult } = require("express-validator");

route.get("/", async (req, res) => {
  const hero = await getHeroImage();
  res.json({ message: "successfully got hero", hero });
});

route.post(
  "/",
  body("image").exists().isLength({ min: 2, max: 450 }),
  async (req, res) => {
    const image = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "please send correct information",
        errors: errors.array(),
      });
    }

    const createHero = await insertHeroImage(image);
    if (!createHero)
      return res.status(400).json({ message: "Couldnt Create Hero" });
    res.json({ message: "successfully created hero" });
  }
);

module.exports = route;
