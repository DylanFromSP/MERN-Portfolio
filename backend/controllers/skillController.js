const { Skill } = require("../models/Model")
const mongoose = require("mongoose")

const getSkills = async (req, res) => {
    const skills = await Skill.find({}).sort({ createdAt: -1 })
    res.status(200).json(skills)
}

const getSkill = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such skill" })
    }

    const skill = await Skill.findById(id)

    if (!skill) {
        return res.status(404).json({ error: "No such skill"  })
    }

    res.status(200).json(skill)
}

const uploadImage = async (req, res) => {
    const { base64 } = req.body
    
    try {
        const image = await Skill.create({ image: base64 })
        res.status(200).json(image)
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}

const createSkill = async (req, res) => {
    const { title, base64 } = req.body

    try {
        const skill = await Skill.create({ title, image: base64 })
        res.status(200).json(skill)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteSkill = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such skill" })
    }

    const skill = await Skill.findOneAndDelete({ _id: id })

    if (!skill) {
        return res.status(404).json({ error: "No such skill" })
    }

    res.status(200).json(skill)
}

const updateSkill = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such skill" })
    }

    const skill = await Skill.findOneAndUpdate(
        { _id: id },
        { ...req.body },
        { new: true }
    )

    if (!skill) {
        return res.status(404).json({ error: "No such skill" })
    }

    res.status(200).json(skill)
}

module.exports = {
    createSkill,
    getSkills,
    getSkill,
    deleteSkill, 
    updateSkill,
    uploadImage
}