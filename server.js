var config = require('./config/config.js'), 
    mongoose = require('mongoose'),   
    express = require('express'),
    morgan = require('morgan');
    app = express();


app.use(express.static('view'));
app.get('/' , function(req , res){
	res.sendFile('/index.html');
});

app.listen(3000, function() {
	  console.log('Example app listening on port 3000!');
});
