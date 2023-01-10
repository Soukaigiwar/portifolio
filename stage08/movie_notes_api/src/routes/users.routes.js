const { Router } = require("express")

const UsersControllers = require("../controllers/UsersControllers")

const userController = new UsersControllers()

const usersRoutes = Router()

function myMiddleware(request, response, next) {
    if (!request.body.isAdmin) {
        return response.json( { message: "User unauthorized "})
    }

    next()
}

usersRoutes.post("/", myMiddleware, userController.create)

module.exports = usersRoutes