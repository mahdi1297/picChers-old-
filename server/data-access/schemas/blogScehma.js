import mongoose from "mongoose"
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
    minLength: 5,
    maxLength: 50000
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


export default mongoose.model("Blog", BlogSchema)
