const { Project, Skill } = require("../models/Model");
const mongoose = require("mongoose");

// Get all projects with populated skills
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({})
            .sort({ createdAt: -1 })
            .populate('skills'); // Populate the skills field
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch projects" });
    }
};

// Get a single project by ID with populated skills
const getProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such project" });
    }

    try {
        const project = await Project.findById(id).populate('skills'); // Populate the skills field

        if (!project) {
            return res.status(404).json({ error: "No such project" });
        }

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch project" });
    }
};

// Create a new project and associate it with skills
const createProject = async (req, res) => {
    const { title, base64, video_url, github_url, website_url, figma_url, description, skillIds } = req.body;

    try {
        const project = await Project.create({
            title,
            image: base64,
            video_url,
            github_url,
            website_url,
            figma_url,
            description,
            skills: skillIds, // Associate skills with the project
        });
        res.status(200).json(project);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a project
const deleteProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such project" });
    }

    try {
        const project = await Project.findOneAndDelete({ _id: id });

        if (!project) {
            return res.status(404).json({ error: "No such project" });
        }

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: "Failed to delete project" });
    }
};

// Update a project and its associated skills
const { Project, Skill } = require("../models/Model");
const mongoose = require("mongoose");

// Update a project and its associated skills
const updateProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such project" });
    }

    try {
        // Extract the existing project
        const project = await Project.findById(id);

        if (!project) {
            return res.status(404).json({ error: "No such project" });
        }

        // If there's an image in the request (file uploaded via Multer)
        if (req.file) {
            project.image = req.file.buffer.toString('base64'); // Assuming you store the image as a base64 string
        }

        // Update other fields from req.body
        Object.keys(req.body).forEach(key => {
            project[key] = req.body[key];
        });

        // Save the updated project
        const updatedProject = await project.save();

        // Populate the skills field before returning
        await updatedProject.populate('skills');

        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ error: "Failed to update project" });
    }
};

// Upload an image (if needed separately)
const uploadImage = async (req, res) => {
    const { base64 } = req.body;

    try {
        const image = await Project.create({ image: base64 });
        res.status(200).json(image);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createProject,
    getProjects,
    getProject,
    deleteProject,
    updateProject,
    uploadImage,
};
