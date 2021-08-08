const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 3000,
  },
  description: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 2000,
  },
  mainimage: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 3000,
  },
  thumbnail: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 3000,
  },
  slug: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 3000,
  },
  content: {
    type: Object,
    required: true,
  },
  authername: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 150,
  },
  profileimgae: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 3000,
  },
  categories: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 3000,
  },
  creationDate: {
    type: Date,
    required: true,
  },
});

module.exports = {
  BlogSchema: mongoose.model("Blog", BlogSchema),
};
