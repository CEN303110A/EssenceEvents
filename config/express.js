var express = require('express'),
    morgan  = require('morgan'),
    bp      = require('body-parser'),
    db      = require('./dbSetup.js'); 
    app     = express(),
    Customer = require('../model/customerSchema'),
    path    = require('path');
module.exports.init = function(){
	db.connectDB();
	

	app.use(morgan('dev'));
	app.use(bp.json());           

	app.use(express.static(__dirname + '/../view'));

	app.use('/bower_components', express.static(__dirname + '/../bower_components'));

	app.get('/' , function(req , res){
//		res.sendFile('/index.html');
		res.sendFile(path.resolve('view/index.html'));	
	});

	app.get('/*' , function(req , res){
	//	res.sendFile('/index.html');
		res.sendFile(path.resolve('view/index.html'));
	});

	app.post('/createCustomer', function(req, res) {

  		var customer = new Customer(req.body);
 		console.log('somethingsomething');
 		customer.save(function(err) {
    		if (err){ 
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
			
}

