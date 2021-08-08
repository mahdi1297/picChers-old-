const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HeroSchema = new Schema({
    path: {
        type: String,
        require: true
    }
})


module.exports = {
    HeroSchema: mongoose.model("Hero", HeroSchema),
}