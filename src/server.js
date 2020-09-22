const express = require('express') // importa modulo que retorna uma f. construtora
const debug = require('debug')('server')
const todoRouter = require('./todo/routers')
const bodyParser = require('body-parser')

const app = new express()
app.use(bodyParser.json()) //habiliata express entender o json

todoRouter(app)

app.get('/', (req, res) => {
    res.send('Hello World!') // servidor funcionando
})

app.listen(8080, () => {
        debug('Pronto para receber conexões na porta 8080.')
    }) //cria servidor web e chama a função callback