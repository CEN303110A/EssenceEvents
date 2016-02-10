var config = require('./config/config.js'),
    mongoose = require('mongoose'),
    express = require('express'),
    morgan = require('morgan'),
    bodyparser = require('body-parser'),
    app = express(),
    path = require('path'),
    Customer = require('./model/customerSchema');

mongoose.connect(config.db.uri, function(err) {
  if(err) throw err;
  else {
    console.log('Connection to DB successful!');
  }
});

//configure views
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static('view'));

app.use('/', express.static(__dirname + '/view'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/' , function(req , res){
	res.sendFile('view/index.html');
});

app.get('/*' , function(req , res){
	res.sendFile(path.resolve('view/index.html'));
});

app.post('/createCustomer', function(req, res) {

  var customer = new Customer(req.body);
  console.log('somethingsomething');
  customer.save(function(err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    else {
      res.json(customer);
    }
  });

});

app.listen(config.port, function() {
	  console.log('Example app listening on port ', config.port, '!');
});

