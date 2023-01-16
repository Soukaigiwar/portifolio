const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class MovieNotesController {
    async create(request, response) {
        const { title, description, user_id, rating } = request.body

        
        const validateUserId = await knex("users").where({id: user_id}).first()

        console.log(validateUserId);


        if (!validateUserId) {
            throw new AppError("Usuário inválido")
        }

        const movie_note = await knex("movie_notes").insert({
            title,
            description,
            user_id,
            rating
        })

        console.log(movie_note);
        await knex("movie_tags").insert(movie_note)

        response.json()
    }
}

module.exports = MovieNotesController