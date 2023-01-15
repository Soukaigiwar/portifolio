const knex = require("../database/knex")

class MovieNotesController {
    async create(request, response) {
        const { title, description, user_id, rating } = request.body

        const movie_note = await knex("movie_notes").insert({
            title,
            description,
            //user_id,
            rating
        })

        console.log(movie_note);
        await knex("movie_tags").insert(movie_note)

        response.json()
    }
}

module.exports = MovieNotesController