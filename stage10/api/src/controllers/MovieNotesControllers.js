const { response } = require("express")
const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class MovieNotesController {
    async create(request, response) {
        const { title, description, rating, tags } = request.body
        const user_id = request.user.id
        const validateUserId = await knex("users").where('id', user_id).first()

        if (!validateUserId) {
            throw new AppError("Usuário inválido")
        }

        if (!rating || rating <=0 || rating >= 6) {
            throw new AppError("A avaliação (rating) precisa ser entre 1 e 5.")
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

        await knex("movie_tags").insert(movieTagsInsert)

        return response.status(201).json()
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

    async index(request, response) {
        const user_id = request.user.id

        const movieNotes = await knex("movie_notes")
            .where('id', user_id )
            .orderBy("title")
        return response.json( movieNotes )
    }

    async delete(request, response) {
        const { id } = request.body

        const movieNote = await knex("movie_notes").where({ id }).first()

        if (!movieNote) {
            throw new AppError("error: Não encontrado", 404)
        } else {
            await knex("movie_notes").where({ id }).delete()
            return response.status(204).json({ id })
        }

        

        // throw new AppError("Não encontrado", 401)
        
        // try {
        //     await knex("movie_notes").where({ id }).delete()
        //     return response.json()
        // } catch {
        //     console.log("não encontrado");
        //     throw new AppError("Não encontrado", 401)
        // }

    }
}

module.exports = MovieNotesController