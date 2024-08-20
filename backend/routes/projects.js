const express = require("express")
const {
    createProject, 
    getProjects, 
    getProject,
    deleteProject,
    updateProject
} = require("../controllers/projectController")

const router = express.Router()

router.get("/", getProjects)

router.get("/:id", getProject)

router.post("/", createProject)

router.delete("/:id", deleteProject)

router.patch("/:id", updateProject)

module.exports = router