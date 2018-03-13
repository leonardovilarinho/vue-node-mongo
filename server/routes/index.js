const _ = require('lodash')
const Employee = require('../model/employee')

module.exports = (app) => {
  app.post('/employees', async (req, res) => {
    try {
      const { body } = req
      const employee = await Employee.create(body)
      res.status(200).send({ error: false, employee })
    } catch (error) {
      res.status(401).send({ error: _.map(error.errors, i => i.message)[0] })
    }
  })

  app.get('/employees', async (req, res) => {
    try {
      const employees = await Employee.find({}).exec()
      res.status(200).send({ error: false, employees })
    } catch (error) {
      res.status(401).send({ error: _.map(error.errors, i => i.message)[0] })
    }
  })
}
