const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ImageCategorySceham = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 450,
  },
  slug: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 550,
  },
  isRemoved: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = {
  ImageCategorySceham: mongoose.model("ImagesCategories", ImageCategorySceham),
};