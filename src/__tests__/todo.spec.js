const request = require('supertest')
const app = require('../app')
const sql = require('../todo/dbconn')

jest.mock('../todo/dbconn')

//  TESTE UNITÁRIO DE CADA SERVIÇO
describe('todos-endpoint', () => {
    describe('when request GET /todo', () => {
        it('should retrieve all todos', async done => {

            sql.mockResolvedValue([{
                id:1,
                description: "take a shower",
                done: false
            }])
            
            const resp = await request(app).get('/todo')
            expect(resp.statusCode).toBe(200) //espero (expectativa) que o resultado tenha esse status
            expect(resp.body).toHaveLength(1)
            expect(resp.body[0].id).toBe(1)
            done()
        })
    })
    
    describe('when request POST /todo', () => {
        it('should add in todo', async done  => {

            sql.mockResolvedValue([{
                id:1,
                description: "read a book",
                done: false
            }])

            const resp = await request(app)
                .post('/todo')
                .send({description: "read a book"})
                .set('Accept', 'application/json')

            expect(resp.statusCode).toBe(201)
            expect(resp.body.description).toBe("read a book")
            done()
        })
    })

    describe('when request PUT /todo',() => {
        it ('should edit a todo', async done => {

            sql.mockResolvedValue([{
                id: 1,
                description: "read a book",
                done: true
            }])

            const resp = await request(app)
                .put('/todo/1')
                .send({description: "read a book", done: true})
                .set('Accept', 'application/json')
            
            expect(resp.statusCode).toBe(200)
            done()
        })
    })



    afterAll(async() => {
        if (app) {
            app.close()
        }
    });
})