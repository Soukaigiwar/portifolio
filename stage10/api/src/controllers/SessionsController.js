const knex = require("../database/knex")
const { compare } = require("bcryptjs")
const AppError = require("../utils/AppError")

class SessionControler {
    async create(request, response) {
        const { email, password } = request.body

        const user = await knex("users").where({ email }).first()

        if (!user) {
            throw new AppError("Email ou senha incorreta", 401)
        }

        const passwordMatched = await compare(password, user.password)

        if (!passwordMatched) {
            throw new AppError("Email ou senha incorreta", 401)
        }

        return response.json(user)
    }
}

module.exports = SessionControler