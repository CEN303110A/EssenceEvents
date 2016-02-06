var config = require('./config/config.js'),
    mongoose = require('mongoose'),
    express = require('express'),
    morgan = require('morgan');
    app = express();

//configure views
app.use(morgan());
app.use(express.static('view'));

app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/' , function(req , res){
	res.sendFile('/index.html');
});

app.get('/*' , function(req , res){
	res.sendFile('/index.html');
});



app.listen(3000, function() {
	  console.log('Example app listening on port 3000!');
});
