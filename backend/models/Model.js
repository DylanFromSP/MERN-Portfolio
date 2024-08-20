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

const projectSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    cover_image: {
      type: String,
      required: true,
    },
    video_url: {
      type: String,
      required: true,
    },
    github_url: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  }, { timestamps: true });

  module.exports = {
    Skill: mongoose.model("Skill", skillSchema),
    Project: mongoose.model("Project", projectSchema)
  };