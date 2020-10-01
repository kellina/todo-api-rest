const express = require('express') // importa modulo que retorna uma f. construtora
const debug = require('debug')('server')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const todoRouter = require('./todo/routers')

const app = new express()
app.use(bodyParser.json()) //habiliata express entender o json

todoRouter(app)

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(8080, () => {
        debug('Pronto para receber conexões na porta 8080.')
    }) //cria servidor web e chama a função callback