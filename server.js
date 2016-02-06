var config = require('./config/config.js'), 
    mongoose = require('mongoose'),   
    express = require('./config/express');

module.exports.start = function() {
  var app = express.init();
  app.listen(config.port, function() {
    console.log('App listening on port', config.port);
  });
};