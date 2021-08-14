const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const ImagesSchema = new Schema({
  path: {
    type: String,
    required: true,
    minLength:2,
    maxLength:2000
  },
  link: {
    type: String,
    required: true,
    minLength:2,
    maxLength:2000
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
    minLength:2,
    maxLength:450
  },
  tags: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
    minLength:2,
    maxLength:450
  }
  // ,
  // followers: {
  //   type: Number,
  //   required: true,
  //   default: 0,
  //   maxLength: 20
  // }
});



module.exports = {
  ImagesSchema: mongoose.model("images", ImagesSchema)
}