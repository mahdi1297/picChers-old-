import mongoose from "mongoose"
const Schema = mongoose.Schema;

let dateNow = Date.now();
let date_ob = new Date(dateNow);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();


const CommentSchema = new Schema({
  blogSlug: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 3000,
  },
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 250,
  },
  lastname: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 250,
  },
  profileimage: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 3000,
  },
  content: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 5000,
  },
  likes: {
    type: Number,
    required: true,
    maxLength: 10,
    default: 0
  },
  isConfirmed: {
    type: Boolean,
    required: true,
    default: false
  },
  isRemoved: {
    type: Boolean,
    required: true,
    default: false
  },
  isRelied: {
    type: Boolean,
    required: true,
    default: false
  },
  creationDate: {
    type: String,
    required: true,
    default: year + "/" + month + "/" + date
  },
});

export default mongoose.model("Comments", CommentSchema)
