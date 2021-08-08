const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PocketSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 250,
  },
  slug: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 350,
  },
  image: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 2000,
  },
});

module.exports = {
  PocketSchema: mongoose.model("Pockets", PocketSchema),
};
