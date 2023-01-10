class UsersControllers {

    /**
     * index - GET
     * show - GET 
     * create - POST
     * update - PUT
     * delete - DELETE
     */

    create(request, response) {
        const { name, email, password } = request.body

        response.status(201).json({ name, email, password })
    }
}

module.exports = UsersControllers