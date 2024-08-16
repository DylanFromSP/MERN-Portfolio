const express = require("express")
const {
    createSkill, 
    getSkills, 
    getSkill,
    deleteSkill,
    updateSkill
} = require("../controllers/skillController")

const router = express.Router()

router.get("/", getSkills)

router.get("/:id", getSkill)

router.post("/", createSkill)

router.delete("/:id", deleteSkill)

router.patch("/:id", updateSkill)

module.exports = router