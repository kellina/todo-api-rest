const postgres = require('postgres')
const debug = require('debug')('task')
const sql = postgres('postgres://kellina:2733@localhost:5432/todo')

const todoRouter = (app) => {
    app.get('/todo', async(req, res) => {
        const tasks = await sql `
            SELECT id, description, done FROM tasks
        `
        debug(`${tasks.length} todos founded`)

        res.json(tasks)
    })

    app.post('/todo', (req, res) => {
        debug('Creating a todo')
        const { description } = req.body
        sql `
            INSERT INTO tasks (description, done) VALUES (${description}, false)
        `
        debug(`Todo ${description} created`)
    })
}

module.exports = todoRouter