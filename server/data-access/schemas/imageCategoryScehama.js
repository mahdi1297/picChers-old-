import mongoose from "mongoose"

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

export default mongoose.model("ImagesCategories", ImageCategorySceham)
