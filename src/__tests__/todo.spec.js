const request = require('supertest')
const app = require('../server')


describe('get-todos-api', () => {
    it('should retrive all todos', async done => {
        const resp = await request(app).get('/todo')
        expect(resp.statusCode).toBe(200) //espero (expectativa) que o resultado tenha esse status
        done()
    })
    afterAll(async() => {
        if (app) {
            app.close()
        }
    });
})