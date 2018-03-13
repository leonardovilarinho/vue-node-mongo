const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: "string",
  lastname: "string",
  participation: "number"
})

module.exports = mongoose.model("Employee", schema)
