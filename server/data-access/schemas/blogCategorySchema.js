const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 250,
  },
  slug: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 250,
  },
});

module.exports = {
  BlogCategorySchema: mongoose.model("blogcategories", BlogCategorySchema),
};
