import mongoose from 'mongoose'
const Schema = mongoose.Schema

const HeroSchema = new Schema({
    path: {
        type: String,
        require: true
    }
})


export default mongoose.model("Hero", HeroSchema)
