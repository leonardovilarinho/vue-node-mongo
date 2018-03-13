const _ = require('lodash')
const Employee = require('../model/employee')

module.exports = (app) => {
  app.post('/employees', async (req, res) => {
    try {
      const { body } = req
      const employees = await Employee.find({}).exec()
      const total_participation = _.sumBy(employees, 'participation') + body.participation

      if (total_participation > 100)
        return res.status(400).send({ error: 'Opps, você está estourando os 100% de participação!' })

      const employee = await Employee.create(body)

      res.status(200).send({ error: false, employee })
    } catch (error) {
      res.status(400).send({ error: _.map(error.errors, i => i.message)[0] })
    }
  })

  app.get('/employees', async (req, res) => {
    try {
      const employees = await Employee.find({}).exec()
      res.status(200).send({ error: false, employees })
    } catch (error) {
      res.status(400).send({ error: _.map(error.errors, i => i.message)[0] })
    }
  })
}
