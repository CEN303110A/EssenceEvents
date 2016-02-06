/*NEED TO REQUIRE OTHER MODELS*/

var mongoose = require('mongoose'),
  var Subcontractor = require('subcontractorSchema.js'),
  var Event = require('eventSchema.js'),
  var Schema = mongoose.Schema;

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


  