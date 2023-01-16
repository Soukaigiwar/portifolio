const { Router } = require("express")

const UsersControllers = require("../controllers/UsersControllers")

const userController = new UsersControllers()

const usersRoutes = Router()

usersRoutes.post("/", userController.create)

module.exports = usersRoutes