const { hash, compare } = require("bcryptjs")
const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class UsersControllers {
    async create(request, response) {
        const { name, email, password } = request.body
        const userData = request.body

        const userExist = await knex("users").where({ name }).first()
        const emailExist = await knex("users").where({ email }).first()

        if (userExist || emailExist) {
            throw new AppError("Esse usuário já está cadastrado.")
        }

        const hashedPassword = await hash(password, 8)

        console.log(userData[password]);
        await knex("users").insert({name:name, email:email, password:hashedPassword})

        return response.status(201).json()
    }
}

module.exports = UsersControllers