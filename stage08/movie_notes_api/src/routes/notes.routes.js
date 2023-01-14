const { Router } = require("express")

const NotesControllers = require("../controllers/NotesController")

const notesController = new NotesControllers()

const notesRoutes = Router()

notesRoutes.get("/", notesController.index)
notesRoutes.get("/:id", notesController.show)
notesRoutes.post("/:user_id", notesController.create)
notesRoutes.delete("/:id", notesController.delete)


module.exports = notesRoutes