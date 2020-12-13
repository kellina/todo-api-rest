const postgres = require('postgres')
const debug = require ('debug')('dbconn')
require('dotenv').config()

const sql = postgres(process.env.DATABASE_URL)
debug('Connecting to db %s', process.env.DATABASE_URL)

module.export = sql