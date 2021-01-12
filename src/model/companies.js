const mongoose = require('mongoose')

const CompaniesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
})

module.exports = mongoose.model('Companies', CompaniesSchema)