require('dotenv').config()
const mongoose = require('mongoose')
const request = require('supertest')
const app = require('../../server/app')

beforeAll(done => mongoose.connect(process.env.DB_TEST_PATH, done))
afterAll(done => mongoose.connection.dropDatabase(done))

it('Test mongoose connection', () => expect(mongoose.connection.readyState).toBe(1))

describe('Test employees features', () => {
  test('It should response the GET method', async () => {
    const { text, statusCode} = await request(app).get('/')

    expect(statusCode).toBe(200)
  })
})
