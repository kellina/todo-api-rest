const express = require('express') // importa modulo que retorna uma f. construtora
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const todoRouter = require('./todo/routers')

const app = express()

todoRouter(app)

app.use(bodyParser.json()) //habiliata express entender o json do body da requisição (qdo tiver)
    .use(cors()) //permite que recursos restritos em uma página da web sejam recuperados por outro domínio de fora ao qual pertence o recurso que será recuperado.
    .use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app