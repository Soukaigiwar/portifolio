const { response } = require("express")
const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class MovieNotesController {
    async create(request, response) {
        const { title, description, user_id, rating, tags } = request.body
        const validateUserId = await knex("users").where({ id: user_id }).first()

        if (!validateUserId) {
            throw new AppError("Usuário inválido")
        }

        const note_id = await knex("movie_notes").insert({
            title,
            description,
            user_id,
            rating
        })

        const movieTagsInsert = tags.map(name => {
            return {
                note_id,
                user_id,
                name
            }
        })
        console.log("aqui");

        console.log(movieTagsInsert);

        await knex("movie_tags").insert(movieTagsInsert)

        response.json()
    }

    async show(request, response) {
        const { id } = request.body
        const movieNote = await knex("movie_notes").where({ id }).first()
        const movieTags = await knex("movie_tags")
            .where({ note_id: id })
            .orderBy("name")

        return response.json({
            ...movieNote,
            movieTags
        })
    }

    async delete(request, response) {
        const { id } = request.body

        await knex("movie_notes").where({ id }).delete()

        response.json()
    }
}

module.exports = MovieNotesController