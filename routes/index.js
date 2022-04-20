
var express = require('express');
var router = express.Router();
var signup = require('../db/signup');
var login = require('../db/login');
var search = require('../db/search');
var searchRoom = require('../db/searchRoom')
var addFacility = require('../db/addFacility');
var addRoom = require('../db/addRoom');


/* GET home page. */
router.post('/', function(req, res, next) {
  res.send("server is up")
  return(res)
});

router.post('/login', login);

router.post('/signup',signup);

router.post('/search', search);
router.get('/room/:roomId', searchRoom);

router.post('/addFacility', addFacility);

router.post('/addRoom', addRoom);

// router.post('/addFacility', addFacility);



module.exports = router;
