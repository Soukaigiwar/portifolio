const { Router } = require("express")

const UsersControllers = require("../controllers/UsersControllers")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")


const usersController = new UsersControllers()

const usersRoutes = Router()

usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAuthenticated, usersController.update)
usersRoutes.get("/", ensureAuthenticated, usersController.index)

module.exports = usersRoutes