var bcrypt = require('bcrypt');
var Facility = require('./facilitySchema');

async function handler( req, res){
  try{
    let {facilityname,email,tel,location}= req.body;
    if(facilityname===""){
      res.json({errMessage:"Sorry can't have an empty facility Name"});
    }
    facilityName = await Facility.findOne({ facilityname: facilityname.toLowerCase() });
    if(facilityName){
      res.json({errMessage:'Sorry a facility already has this name'});
    }

    let existingEmail = await Facility.findOne({ email: email.toLowerCase() });
    if(existingEmail){
      res.json({errMessage:'Sorry a facility with this email already exists'});
    }
    else{
      let newFacility= new Facility({
        facilityname,email,tel,location,image:""
      });
      try{
      await newFacility.save()
        .then( async doc=>{
          console.log(doc);
        //   let allFacilities = await Facility.find({});
          res.json({success:"yes"})
        })
      
      }catch(err){
        console.log(`couldnt save new facility to database due to error:${err}`);
        res.end()
      }
    }
    
  } catch(err){
    console.log(err);
    return res.json({errMessage:'Sorry could not add the new Facility'});
  }

}

module.exports = handler;