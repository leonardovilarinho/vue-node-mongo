require('dotenv').config()
const mongoose = require('mongoose')
const request = require('supertest')
const app = require('../server/app')

beforeAll(done => mongoose.connect(process.env.DB_TEST_PATH, done))
afterAll(done => mongoose.connection.dropDatabase(done))

it('Test mongoose connection', () => expect(mongoose.connection.readyState).toBe(1))

describe('Test employees features', () => {
  test('Invalid register employee without name', async () => {
    const employee = {lastname: 'Vilarinho', participation: 30}
    const { text, statusCode} = await request(app).post('/employees').send(employee)

    expect(statusCode).toBe(400)

    const data = JSON.parse(text)
    expect(data.error).toContain('nome')
    expect(data.error).toContain('obrigatório')
  })

  test('Invalid register employee without lastname', async () => {
    const employee = {name: 'Leonardo', participation: 30}
    const { text, statusCode} = await request(app).post('/employees').send(employee)

    expect(statusCode).toBe(400)

    const data = JSON.parse(text)
    expect(data.error).toContain('sobrenome')
    expect(data.error).toContain('obrigatório')
  })

  test('Invalid register employee without pasticipation', async () => {
    const employee = {name: 'Leonardo', lastname: 'Vilarinho'}
    const { text, statusCode} = await request(app).post('/employees').send(employee)

    expect(statusCode).toBe(400)

    const data = JSON.parse(text)
    expect(data.error).toContain('participação')
    expect(data.error).toContain('obrigatória')
  })

  test('Invalid register employee with number in name', async () => {
    const employee = {name: 'L3onardo', lastname: 'Vilarinho', participation: 30}
    const { text, statusCode} = await request(app).post('/employees').send(employee)

    expect(statusCode).toBe(400)

    const data = JSON.parse(text)
    expect(data.error).toContain('nome')
    expect(data.error).toContain('número')
  })

  test('Invalid register employee with number in lastname', async () => {
    const employee = { name: 'Leonardo', lastname: 'Vilar1nho', participation: 30 }
    const { text, statusCode } = await request(app).post('/employees').send(employee)

    expect(statusCode).toBe(400)

    const data = JSON.parse(text)
    expect(data.error).toContain('sobrenome')
    expect(data.error).toContain('número')
  })

  test('Invalid register employee with participation < 0', async () => {
    const employee = { name: 'Leonardo', lastname: 'Vilarinho', participation: -10 }
    const { text, statusCode } = await request(app).post('/employees').send(employee)

    expect(statusCode).toBe(400)

    const data = JSON.parse(text)
    expect(data.error).toContain('participação')
    expect(data.error).toContain('0 e 100')
  })

  test('Invalid register employee with participation > 100', async () => {
    const employee = { name: 'Leonardo', lastname: 'Vilarinho', participation: 101 }
    const { text, statusCode } = await request(app).post('/employees').send(employee)

    expect(statusCode).toBe(400)

    const data = JSON.parse(text)
    expect(data.error).toContain('participação')
    expect(data.error).toContain('0 e 100')
  })

  test('List employees without employees', async () => {
    const { text, statusCode } = await request(app).get('/employees')

    expect(statusCode).toBe(200)

    const data = JSON.parse(text)
    expect(data.error).toBeFalsy()
    expect(data).toHaveProperty('employees')
    expect(data.employees.length).toBe(0)
  })

  test('Create an employee', async () => {
    const employee = { name: 'Leonardo', lastname: 'Vilarinho', participation: 100 }
    const { text, statusCode } = await request(app).post('/employees').send(employee)

    expect(statusCode).toBe(200)

    const data = JSON.parse(text)
    expect(data.error).toBeFalsy()
  })

  test('Create an employee with participation already full', async () => {
    const employee = { name: 'Leonardo', lastname: 'Vilarinho', participation: 100 }
    const { text, statusCode } = await request(app).post('/employees').send(employee)

    expect(statusCode).toBe(400)

    const data = JSON.parse(text)
    expect(data.error).toContain('100%')
    expect(data.error).toContain('distribuída')
  })


  test('List employees with a employee', async () => {
    const { text, statusCode } = await request(app).get('/employees')

    expect(statusCode).toBe(200)

    const data = JSON.parse(text)
    expect(data.error).toBeFalsy()
    expect(data).toHaveProperty('employees')
    expect(data.employees.length).toBe(1)
  })
})
