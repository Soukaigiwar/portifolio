const AppError = require("../utils/AppError")

class UsersControllers {

    /**
     * index - GET
     * show - GET 
     * create - POST
     * update - PUT
     * delete - DELETE
     */

    create(request, response) {
        const { name, email, password, isAdmin } = request.body

        if (!name) {
            throw new AppError("Nome obrigatório")
        }
        response.status(201).json({ name, email, password, isAdmin })
    }
}

module.exports = UsersControllers