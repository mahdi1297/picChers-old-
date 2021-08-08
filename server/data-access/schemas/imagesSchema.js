var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const ImagesSchema = new Schema({
  path: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  ownerId: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  tags: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = {
  ImagesSchema: mongoose.model("Images", ImagesSchema),
};
