const express = require('express') // importa modulo que retorna uma f. construtora
const debug = require('debug')('server')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const todoRouter = require('./todo/routers')

const app = new express()
app.use(bodyParser.json()) //habiliata express entender o json
app.use(cors())

todoRouter(app)

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app