
var express = require('express');
var router = express.Router();
const multer  = require('multer')
const upload = multer({storage: multer.memoryStorage()})

var signup = require('../db/signUp');
var login = require('../db/login');
var search = require('../db/search');
var searchRoom = require('../db/searchRoom')

var addFacility = require('../db/addFacility');
var updateFacility = require('../db/updateFacility')
var deleteFacility = require('../db/deleteFacility')

var addRoom = require('../db/addRoom');
var getAdminDashboard =require('../db/getAdminDashboard')
var getAdminFacility= require('../db/getAdminFacility')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("server is up")
  return(res)
});

router.post('/adminLogin', login);
router.get('/admin/:adminId',getAdminDashboard);

router.post('/adminSignup',signup);

router.post('/search', search);
router.get('/room/:roomId', searchRoom);

router.post('/addFacility', upload.single('image'), addFacility);
router.post('/updateFacility',updateFacility);
router.post('/deleteFacility',deleteFacility)
router.get('/admin/facility/:facilityId',getAdminFacility)


router.post('/addRoom', addRoom);

// router.post('/addFacility', addFacility);



module.exports = router;
