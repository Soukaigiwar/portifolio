const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class MovieNotesController {
    async create(request, response) {
        const { title, description, user_id, rating } = request.body
        const validateUserId = await knex("users").where({id: user_id}).first()

        if (!validateUserId) {
            throw new AppError("Usuário inválido")
        }

        const movie_note = await knex("movie_notes").insert({
            title,
            description,
            user_id,
            rating
        })

        await knex("movie_tags").insert(movie_note)

        response.json()
    }

    async delete(request, response) {
        const { id } = request.body
        
        await knex("movie_notes").where({id}).delete()

        response.json()
    }
}

module.exports = MovieNotesController