var bcrypt = require('bcrypt');
var Facility= require('./facilitySchema')
var Room = require('./roomSchema');
const { Deta } = require('deta');
const {imgStorage} = require('../db/env');


// add your Project Key
const deta = Deta(imgStorage.driveKey);

// name your Drive
const sojourner = deta.Drive("sojourner");



async function handler( req, res){
  try{
    let {facility,roomCapacity,amount,paymentCycle,residentType,extraFeatures}= req.body;

    facilityId = await Facility.findOne({ facilityname: facility}, {_id:1});
    if(!facilityId){
      res.status(422).json({message:'Sorry no such facility exists within the database'});
    }
    else{
      // let roomImages=[]
      // let roomeImageUrls=[]
      // rooImages.forEach(()=>{
      //   roomeImageUrls.push("")
      // })

      let newRoom= new Room({
        facility:facilityId,
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
        .then(async doc=>{
          console.log(doc);
          // let rooms = await Room.find({});
          // if (rooms){res.json(rooms)}
        })
      
      }catch(err){
        console.log(`couldnt save new room to database due to error: ${err}`);
        res.end()
      }
    }
    
  } catch(err){
    console.log(err);
    return res.status(500).json({message:'Sorry could not add the new Room'});
  }

}

module.exports = handler;