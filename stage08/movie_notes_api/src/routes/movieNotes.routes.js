const { Router } = require("express")

const MovieNotesController = require("../controllers/MovieNotesControllers")

const movieNotesControllers = new MovieNotesController()

const movieNotesRoutes = Router()

movieNotesRoutes.get("/", movieNotesControllers.show)
movieNotesRoutes.delete("/", movieNotesControllers.delete)
movieNotesRoutes.post("/", movieNotesControllers.create)

module.exports = movieNotesRoutes