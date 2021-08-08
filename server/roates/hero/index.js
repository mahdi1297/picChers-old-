const express = require("express");
const route = express.Router();
const { getHeroImage, insertHeroImage } = require("./../../models/hero");

route.get("/", async (req, res) => {
  const hero = await getHeroImage();
  res.json({ message: "successfully got hero", hero });
});

route.post("/", async (req, res) => {
  const image = req.body;
  if (!image) return res.status(400).json({ message: "Bad request" });
  const createHero = await insertHeroImage(image);
  if (!createHero)
    return res.status(400).json({ message: "Couldnt Create Hero" });
  res.json({ message: "successfully created hero" });
});

module.exports = route;
