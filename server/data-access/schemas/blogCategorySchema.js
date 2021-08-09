import mongoose from "mongoose";

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

export default mongoose.model("BlogCategories", BlogCategorySchema);
