const { application, response } = require('express')
const express = require('express')

const app = express()
const PORT = 3333

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}.`)
})

app.get("/", (request, response) => {
    response.send('hello world')
})

app.get("/hellosergio", (request, response) => {
    response.send('hello sergio!!!')
})

app.get("/product/:id", (request, response) => {
    response.send(`Id do produto: ${request.params.id}.`)
})

app.get("/product/:id/:unit_price", (request, response) => {
    response.send(`
        Id do produto: ${request.params.id}.
        Preço do produto: R$ ${request.params.unit_price}.
        `)
})