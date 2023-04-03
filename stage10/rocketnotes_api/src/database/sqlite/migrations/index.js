const sqliteConnection = require("")

const createUsers = require("./createUsers")

async function migrationsRun() {
    const schemas = [
        createUsers
    ].join('')

    sqliteConnection().then()
}