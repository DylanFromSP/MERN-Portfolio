require("dotenv").config()

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const skillsRoute = require("./routes/skills")

//Express App
const app = express()

//Middleware
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'PUT']
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Routes
app.use("/api/skills", skillsRoute)

//Connect to Database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //Listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to database and listening on port", process.env.PORT)
        })
    }).catch((error) => {
        console.log(error)
    })