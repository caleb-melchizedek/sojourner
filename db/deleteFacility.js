var bcrypt = require('bcrypt');
var Facility = require('./facilitySchema');

async function handler( req, res){
  try{
    let {_id}= req.body;
    
    let deletedFacility = await Facility.findOneAndDelete({ _id:_id });
    if(!deletedFacility){
      res.json({errMessage:'Sorry No such facility exists on the database'});
    }
    else{
        res.json({success:"yes"})
    }
    
  } catch(err){
    console.log(err);
    return res.json({errMessage:'Sorry could not delete the new Facility'});
  }

}

module.exports = handler;