var bcrypt = require('bcrypt');
var Facility = require('./facilitySchema');
var {imgStorage} = require('../db/env');
const { Deta } = require("deta");

// add your Project Key
const deta = Deta(imgStorage.driveKey);
// name your Drive
const facilityPhotos = deta.Drive("facilityPhotos");
// call inside an async function ;)


async function handler( req, res){
  res.json({errMessage:"Sorry can't have an empty facility Name"});
   try{
     
    let FacilityImg =req.file;
    console.log(FacilityImg);
    let {facilityname,email,tel,location}= req.body;
    console.log(req.file);
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
      let imgExtension = FacilityImg.Originalname.split(".").pop();
     console.log(imgExtension)
    //  let imgUploaded= await facilityPhotos.put(`${facilityname}.${imgExtension}`, {data:FacilityImg.Buffer});
    if(imgUploaded){
      // const buf = await facilityPhotos.get(`${facilityname}.${imgExtension}`);
      let newFacility= new Facility({
        facilityname,email,tel,location,image:`${facilityname}.${imgExtension}`
      });
    }
      
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