const { request } = require("express")
const express = require("express")

const app = express()

app.get("/", (request, response) => {
    response.send("hello world!")
}) 

// route params (valores obrigatórios)
app.get("/message/:id/:user", (request, response) => {
    const { id, user } = request.params

    response.send(`
        Mensagem Id: ${id}.<br />
        Para Usuário: ${user}.
    `)
})

// Query params (parâmetros não são obrigatórios)
app.get("/users", (request, response) => {
    const { page, limit } = request.query
    
    response.send(`
        Página: ${page}.<br />
        Mostrar ${limit}.`)
})

const PORT = 3333

app.listen(PORT, () => console.log(`Api running on port: ${PORT}`))