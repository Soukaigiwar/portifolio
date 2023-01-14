const { Router } = require("express")

const TagsControllers = require("../controllers/TagsController")

const tagsController = new TagsControllers()

const tagsRoutes = Router()

tagsRoutes.get("/:user_id", tagsController.index)

module.exports = tagsRoutes