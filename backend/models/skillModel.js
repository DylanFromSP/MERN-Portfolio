const mongoose = require("mongoose")

const Schema = mongoose.Schema

const skillSchema = new Schema({
    title: {
        type: String,
    },
    image: {
        type: String,
    }
}, { timestamps: true })

module.exports = mongoose.model("Skill", skillSchema)