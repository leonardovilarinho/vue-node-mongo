const Employee = require('../model/employee')

module.exports = (app) => {
  app.get('/', async (req, res) => {
    try {
      const employees = await Employee.find({}).exec()
      res.status(200).send({ error: false, employees })
    } catch (error) {
      res.status(401).send({ error })
    }
  })
}
