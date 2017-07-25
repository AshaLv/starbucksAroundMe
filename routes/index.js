var express = require('express');
var router = express.Router();
var starbucks = require('../starbucks_new_york.json');
var mapController = require('../controllers/mapController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 

	title: 'Starbucks Around Me',
	starbucks:starbucks
 
  });
});

/* Ajaxly get sorted starbuck objects*/
router.get('/:customer_lat/:customer_lon',mapController.compareDistance);

module.exports = router;
