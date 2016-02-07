var 	mongoose = require('mongoose');
	config   = require('./config.js');	

module.exports.connectDB = function(){
	mongoose.connect(config.db.uri, function(err){
		if (err) throw err;
		else console.log("DB connection Success");
	});	
}
