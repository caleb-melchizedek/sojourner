
var express = require('express');
var router = express.Router();
var signup = require('../db/signUp');
var login = require('../db/login');
var search = require('../db/search');
var searchRoom = require('../db/searchRoom')
var addFacility = require('../db/addFacility');
var addRoom = require('../db/addRoom');
var getAdminDashboard =require('../db/getAdminDashboard')

/* GET home page. */
router.post('/', function(req, res, next) {
  res.send("server is up")
  return(res)
});

router.post('/adminLogin', login);
router.get('/admin/:adminId', getAdminDashboard);

router.post('/adminSignup',signup);

router.post('/search', search);
router.get('/room/:roomId', searchRoom);

router.post('/addFacility', addFacility);

router.post('/addRoom', addRoom);

// router.post('/addFacility', addFacility);



module.exports = router;
