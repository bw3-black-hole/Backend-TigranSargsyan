const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    describe('GET /', () => {
        it('Should respond with 200 OK', async () => {
            const response = await request(server).get('/');
            expect(response.status).toBe(200);  
        })
    })
    it('should return { api: "Server is working" }', () => {
        return request(server)
          .get('/')
          .then(res => {
            expect(res.body).toEqual({ message: 'Server is working' });
          }); 
      }); 
      // *** GET endpoint test ***
      it('Should return status code 200(OK)', async () => {
        const response = await request(server).get('/api/bh')
        expect(response.status).toBe(200)
    })
    it('Should return JSON', async () => {
        const response = await request(server).get('/api/bh')

        expect(response.type).toBe('application/json')
    })
    // *** POST endpoint test ***
    it('Should return status 201(Created) if the object has required fields', async () => {
        const entry = {
            entry: 'test3'
        }
        const response = await request(server).post('/api/create').send(entry)

        expect(response.status).toBe(201)
    })
    it('Should return a 422 code if the object being sent is incomplete', async () => {
        const newGame = {
            entry: ''
            
        }
        const response = await request(server).post('/api/create').send(newGame)

        expect(response.status).toBe(422)
    })
    // *** Update endpoint test ***
    it('Should return status 200 Updated', async () => {
        const entry = {
            entry: 'updated'
        }
        const response = await request(server).put('/api/bh/:1').send(entry)

        expect(response.status).toBe(200)
    })
    // *** Delete endpoint test ***
    it('Should return status 200 Deleted', async () => {
        const entry = {
            entry: 'updated'
        }
        const response = await request(server).delete('/api/bh/:6').send(entry)

        expect(response.status).toBe(200)
    })
})
