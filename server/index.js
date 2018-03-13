require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')

mongoose.connect(process.env.DB_PATH, (error) => {
  if (error) throw error

  app.listen(process.env.SERVER_PORT, () => console.log('Serving...'))
})
