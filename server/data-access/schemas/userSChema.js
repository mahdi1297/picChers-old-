import mongoose from "mongoose"
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 300,
  },
  lastname: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 300,
  },
  username: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 300,
    unique: true
  },
  email: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 1000,
    unique: true
  },
  profileimage: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 1500,
    default: "https://www.w3schools.com/howto/img_avatar2.png",
  },
  description: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 1500,
    default: "fill your description in user dashboard",
  },
  totallikes: {
    type: Number,
    required: true,
    minLength: 1,
    default: 0,
    maxLength: 300,
  },
  role: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 300,
    default: "begginer",
  },
  permission: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 60,
    default: "User",
  },
  password: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 1200,
  },
});

export default mongoose.model("Users", UserSchema)