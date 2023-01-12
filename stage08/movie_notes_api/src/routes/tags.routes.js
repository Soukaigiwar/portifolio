const { Router } = require("express")

const TagsControllers = require("../controllers/TagsController")

const tagsController = new TagsControllers()

const tagsRoutes = Router()

function myMiddleware(request, response, next) {
    // if (!request.body.isAdmin) {
    //     return response.json( { message: "User unauthorized "})
    // }

    next()
}

tagsRoutes.get("/:user_id", tagsController.index)

module.exports = tagsRoutes