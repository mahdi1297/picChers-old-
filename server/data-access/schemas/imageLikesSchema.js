const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageLikeSchema = new Schema({
  imageId: {
    type: String,
    minLength: 20,
    maxLength: 100,
  },
  userId: {
    type: String,
    minLength: 20,
    maxLength: 100,
  },
});


module.exports = {
  ImagesSchema: mongoose.model("imageslikes", ImageLikeSchema)
}
