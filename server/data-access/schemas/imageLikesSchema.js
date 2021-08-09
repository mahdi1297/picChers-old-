import mongoose from "mongoose"
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

export default mongoose.model("ImagesLikes", ImageLikeSchema)
