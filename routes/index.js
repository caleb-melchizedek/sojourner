
var express = require('express');
var router = express.Router();
var signup = require('../db/signup');
var login = require('../db/login');
var search = require('../db/search');

/* GET home page. */
router.post('/', function(req, res, next) {
  req.body
  return(res)
});

router.post('/login', login);

router.post('/signup',signup);

router.post('/search', search);

module.exports = router;
