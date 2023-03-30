const { Router } = require("express")
const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.post("/", myMidlleware, usersController.create)

module.exports = usersRoutes
