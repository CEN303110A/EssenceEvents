var express = require('express'),
    
    router = express.Router();
  

exports.home = function(req, res){
	res.sendFile('public/index1.html' , { root : __dirname});
}

router.route('/*')
      .get('./view/index.html');
