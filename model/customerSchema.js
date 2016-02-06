var mongoose = require('mongoose'),
  Subcontractor = require('./subcontractorSchema.js'),
  Event = require('./eventSchema.js'),
  Schema = mongoose.Schema;

var customerSchema = new Schema({
  username: String,
  password: String,
  id: String,
  name: String,
  phoneNumber: Number,
  email: String,
  subcontractor: [Subcontractor],
  budget: {
    total: Number
  },
  events: [Event]
});

var Customer = mongoose.model('Costumer', customerSchema);

module.exports = Customer;


  