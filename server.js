var config = require('./config/config.js'),
    mongoose = require('mongoose'),
    express = require('express'),
    morgan = require('morgan');
    app = express();


app.use(express.static('view'));
app.get('/' , function(req , res){
	res.sendFile('/index.html');
});

app.post('/createCustomer', function(req, res) {
  var username = req.body.username,
      password = req.body.password,
      id = req.body.id,
      name = req.body.name,
      phoneNumber = req.body.phoneNumber,
      email = req.body.email,
      subcontractor = req.body.subcontractor,
      budget = req.body.budget,
      events = req.body.events;
});

app.listen(config.port, function() {
	  console.log('Example app listening on port ', config.port, '!');
});
