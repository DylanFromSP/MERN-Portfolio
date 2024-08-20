const { Project } = require("../models/Model")
const mongoose = require("mongoose")

const getProjects = async (req, res) => {
    const projects = await Project.find({}).sort({ createdAt: -1 })
    console.log("Success")
    res.status(200).json(projects)
}

const getProject = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such project" })
    }

    const project = await Project.findById(id)

    if (!project) {
        return res.status(404).json({ error: "No such project"  })
    }

    res.status(200).json(project)
}

const createProject = async (req, res) => {
    const { title, image } = req.body

    try {
        const project = await Project.create({ title, image })
        res.status(200).json(project)
    } catch(error) {
        res.status(400).json({ error: error.message})
    }
}

const deleteProject = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such project" })
    }

    const project = await Project.findOneAndDelete({ _id: id })

    if (!project) {
        return res.status(404).json({ error: "No such project" })
    }

    res.status(200).json(project)
}

const updateProject = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such project" })
    }

    const project = await Project.findOneAndUpdate(
        { _id: id },
        { ...req.body },
        { new: true }
    )

    if (!project) {
        return res.status(404).json({ error: "No such project" })
    }

    res.status(200).json(project)
}

module.exports = {
    createProject, 
    getProjects, 
    getProject,
    deleteProject,
    updateProject
}

