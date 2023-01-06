class UsersControllers {
    /**
     * index - GET para listar vários registros.
     * show - GET para exibir um regitro específico.
     * create - POST para criar um registro.
     * update - PUT para atualizar um registro.
     * delete - DELETE para remover um registro.
     */

    create(request, response) {
        const { name, email, passw } = request.body //json
    
        response.json({ name, email, passw }) //response json
    }
}

module.exports = UsersControllers