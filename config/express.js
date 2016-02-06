var path = require('path'),
  express = require('express'),
  mongoose = require('mongoose'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  config = require('./config');
  /*CONTROLLERS
  ^
 /_\
/___\*/

module.exports.init = function() {
  mongoose.connect(config.db.uri);
  var app = express();
  app.use(morgan('dev'));
  app.use(bodyParser.json());

  //DO SOME API STUFF

  app.use('/', experss.static('public'));

  app.get('/', function(req, res) {
    res.sendFile(__dirname.substring(0, __dirname.length - 6) + 'view/index.html');
  });

  app.all('*', function(req, res) {
    res.redirect('/');
  });

  return app;
};
