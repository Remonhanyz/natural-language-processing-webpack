import app from './index'
import 'regenerator-runtime/runtime'

const supertest = require('supertest')
const request = supertest(app)

describe("Testing the server functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    // test("Testing the app() function", () => {
        it('Gets the test endpoint', async () => {
            // Sends GET Request to /test endpoint
            let res = await request.get('/')
            expect(res.status).toBe(200)
            res = await request.post('/posturl')
            expect(res.status).toBe(200)


        })
    // })
});