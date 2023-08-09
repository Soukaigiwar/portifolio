const { Router } = require("express");

const MovieNotesController = require("../controllers/MovieNotesControllers");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const movieNotesControllers = new MovieNotesController();

const movieNotesRoutes = Router();

movieNotesRoutes.use(ensureAuthenticated);


movieNotesRoutes.get("/:id", movieNotesControllers.show);
movieNotesRoutes.get("/", movieNotesControllers.index);
movieNotesRoutes.delete("/:id", movieNotesControllers.delete);
movieNotesRoutes.post("/", movieNotesControllers.create);

module.exports = movieNotesRoutes;