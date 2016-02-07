var config = require('./config/config.js'),
    express = require('express'),
    morgan = require('morgan'),
    bodyparser = require('body-parser'),
    app = express(),
    setup = require('./config/dbSetup.js'),
    Customer = require('./model/customerSchema');


//TODO add test suite
var argvars = process.argv.slice(2);
console.log(argvars);
if (argvars[0] === "--db-test"){
	setup.connectDB();
}


//configure views
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static('view'));

app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/' , function(req , res){
	res.sendFile('/index.html');
});

app.get('/*' , function(req , res){
	res.sendFile('/index.html');
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
