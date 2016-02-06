var express = require('express'),
    router = express.Router();

router.route('/*')
      .get('view/index.html');
