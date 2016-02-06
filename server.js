var config = require('./config/config.js'),
    mongoose = require('mongoose'),
    express = require('express'),
    morgan = require('morgan'),
    bodyparser = require('body-parser'),
    app = express();

//configure views
app.use(morgan());
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

    var username = req.body.username;
    console.log(username);
    res.send(username);
    /*
     var username = req.body.username,
      password = req.body.password,
      id = req.body.id,
      name = req.body.name,
      phoneNumber = req.body.phoneNumber,
      email = req.body.email,
      subcontractor = req.body.subcontractor,
      budget = req.body.budget,
      events = req.body.events;

     */
});

app.listen(config.port, function() {
	  console.log('Example app listening on port ', config.port, '!');
});
