const mongoose = require("mongoose")

const Schema = mongoose.Schema

const skillSchema = new Schema({
    title: {
        type: String,
        required : true
    },
    image: {
        type: String,
    }
}, { timestamps: true })

const projectSchema = new Schema({
    title: {
      type: String,
      required : true
    },
    image: {
      type: String,
    },
    video_url: {
      type: String,
    },
    github_url: {
      type: String,
    },
    website_url: {
      type: String,
    },
    figma_url: {
      type: String,
    },
    description: {
      type: String,
    },
    skills: [{
      type: Schema.Types.ObjectId,
      ref: 'Skill',
    }],
  }, { timestamps: true });

  module.exports = {
    Skill: mongoose.model("Skill", skillSchema),
    Project: mongoose.model("Project", projectSchema)
  };