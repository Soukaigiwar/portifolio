const { hash, compare } = require("bcryptjs")
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class UsersControllers {

    async create(request, response) {
        const { name, email, password } = request.body

        const database = await sqliteConnection()
        const checkUserExist = await database
            .get("SELECT * FROM users WHERE email = (?)", [email])

        if (checkUserExist) {
            throw new AppError("Este email já esta em uso.")
        }

        const hashedPassword = await hash(password, 8)

        await database.run(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)", 
            [name, email, hashedPassword])

        return response.status(201).json()
    }

    async update(request, response) {
        const { name, email, old_password, new_password } = request.body
        const { id } = request.params

        const database = await sqliteConnection()
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])
        
        if (!user) {
            throw new AppError("Usuário não encontrado.")
        }
        
        const userWithUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])
        
        if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
            throw new AppError("Este email já está em uso.")
        }
        
        user.name = name ?? user.name
        user.email = email ?? user.email
        
        if (new_password && !old_password) {
            throw new AppError("Precisa informar a senha antiga.")
        }

        const validateOldPassword = await compare(old_password, user.password)
        
        if (!validateOldPassword) {
            throw new AppError("Senha nao confere.")
        }
        
        if (new_password && old_password) {
            user.password = await hash(new_password, 8)
        }

        await database.run(`
        UPDATE users SET
        name = ?,
        email = ?,
        password = ?,
        updated_at = DATETIME('now')
        WHERE id = ?`,
        [user.name, user.email, user.password, id]
        )
        
        return response.json()
    }


}

module.exports = UsersControllers