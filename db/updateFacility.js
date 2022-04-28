var bcrypt = require('bcrypt');
var Facility = require('./facilitySchema');

async function handler( req, res){
  try{
    let {facilityname,email,tel,location,_id}= req.body;
    if(facilityname===""){
      res.json({errMessage:"Sorry can't have an empty facility Name"});
    }
    let updatedFacility = await Facility.findOneAndUpdate({ _id:_id },{facilityname,email,tel,location,});
    if(!updatedFacility){
      res.json({errMessage:'Sorry No such facility exists on the database'});
    }
    else{
        res.json({success:"yes"})
    }
    
  } catch(err){
    console.log(err);
    return res.json({errMessage:'Sorry could not add the new Facility'});
  }

}

module.exports = handler;