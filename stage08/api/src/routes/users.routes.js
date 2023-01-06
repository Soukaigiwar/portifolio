const { Router } = require("express")

const usersRoutes = Router()

usersRoutes.post("/", (request, response) => {
    const { name, email, passw } = request.body //json
    
    response.json({ name, email, passw }) //response json
})

module.exports = usersRoutes
