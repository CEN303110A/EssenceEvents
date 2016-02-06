/*NEED TO REQUIRE OTHER MODELS*/

var mongoose = require('mongoose'),
  var Subcontractor = require('subcontractorSchema.js'),
  var Event = require('eventSchema.js'),
  var Schema = mongoose.Schema;

var customerSchema = new Schema({
  username: string,
  password: string,
  id: string,
  name: string,
  phoneNumber: number,
  email: string,
  subcontractor: [Subcontractor],
  budget: {
    total: number
  },
  events: [Event]
});

var Customer = mongoose.model('Costumer', customerSchema);

module.exports = Customer;


  