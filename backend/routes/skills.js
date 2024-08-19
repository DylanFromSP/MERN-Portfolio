const express = require("express")
const {
    createSkill, 
    getSkills, 
    getSkill,
    deleteSkill,
    updateSkill,
    uploadImage,
    deleteAllSkills
} = require("../controllers/skillController")

const router = express.Router()

router.get("/", getSkills)

router.get("/:id", getSkill)

router.post("/", createSkill)

router.delete("/:id", deleteSkill)

router.patch("/:id", updateSkill)

router.post("/uploadImage", uploadImage)

module.exports = router