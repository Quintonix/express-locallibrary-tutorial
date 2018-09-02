var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* copied the code above but added cool as another route, used backslash as escape character in string  */
router.get('/cool', function(req, res, next) {
	res.send('You\'re so cool!');
});

module.exports = router;
