var express = require('express');
var router = express.Router();
var starbucks = require('../starbucks_new_york.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 

	title: 'Starbucks Around Me',
	starbucks:starbucks
 
  });
});

module.exports = router;
