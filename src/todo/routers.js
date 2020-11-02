const postgres = require('postgres')
const debug = require('debug')('task')
const sql = postgres('postgres://kellina:2733@localhost:5432/todo')

const todoRouter = (app) => {
    app.get('/todo', async(req, res) => {
        const tasks = await sql `
            SELECT id, description, done FROM tasks ORDER BY done
        `
        debug(`${tasks.length} todos founded`)

        res.json(tasks)
    })

    app.post('/todo', async(req, res) => {
        debug('Creating a todo')
        const { description } = req.body
        const [task] = await sql `
            INSERT INTO tasks (description, done) VALUES (${description}, false)

            returning *
        `
        res.status(201).json(task)
        debug(`Todo ${description} created`)
    })

    app.put('/todo/:id', async(req, res) => {
        const { description, done } = req.body
        const { id } = req.params
        const [task] = await sql `
            UPDATE tasks SET
                description = ${description},
                done = ${done}
            WHERE id = ${id}

            returning *
        `
        res.json(task)
    })

    app.delete('/todo/:id', async(req, res) => {
        const { id } = req.params
        const [task] = await sql `
            DELETE FROM tasks
            WHERE id = ${id}

            returning *
        `

        res.json(task)
    })
}

module.exports = todoRouter