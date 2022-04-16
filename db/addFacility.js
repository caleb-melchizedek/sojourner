var bcrypt = require('bcrypt');
var Facility = require('./facilitySchema');

async function handler( req, res){
  try{
    let {facilityname,email,tel,location}= req.body;

    facilityEmail = await Facility.findOne({ email: email.toLowerCase() });
    if(facilityEmail){
      return res.status(422).json({message:'Sorry a facility with this email already exists'});
    }
    else{
      let newFacility= new Facility({
        facilityname,email,tel,location
      });
      try{
      await newFacility.save()
        .then(doc=>{
          console.log(doc);
          let facilities = Facility.find();
          if (f){res.json(facilities)}
        })
      
      }catch(err){
        console.log(`couldnt save new facility to database due error:${err}`);
        res.end
      }
    }
    
  } catch(err){
    console.log(err);
    return res.status(500).json({message:'Sorry could not add the new Facility'});
  }

}

module.exports = handler;