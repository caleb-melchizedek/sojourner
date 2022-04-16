var bcrypt = require('bcrypt');
var Room = require('./roomSchema');

async function handler( req, res){
  try{
    let {roomCapacity,amount,paymentCycle,residetType,extraFeatures}= req.body;

    // facilityId = await Facility.findOne({ facility: facility});
    // if(facilityId){
    //   return res.status(422).json({message:'Sorry a facility with this email already exists'});
    // }
    // else{
      let newRoom= new Room({
        roomCapacity,
        pricing:{
            amount,
            paymentCycle,
            residentType
        },
        extraFeatures
      });
      try{
      await newRoom.save()
        .then(doc=>{
          console.log(doc);
          let facilities = Facility.find();
          if (f){res.json(facilities)}
        })
      
      }catch(err){
        console.log(`couldnt save new room to database due error:${err}`);
        res.end
      }
    // }
    
  } catch(err){
    console.log(err);
    return res.status(500).json({message:'Sorry could not add the new Room'});
  }

}

module.exports = handler;