var config = require('./config/config.js'),
    setup = require('./config/express.js'),
    express = require('express'),
    app = express();


setup.init();
/*
app.listen(config.port, function() {
	  console.log('Example app listening on port ', config.port, '!');
});
*/
