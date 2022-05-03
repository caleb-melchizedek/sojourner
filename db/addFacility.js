const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')

var Facility = require('./facilitySchema');

async function handler( req, res){
   try{
    let FacilityImgs =req.files;
    
    let {facilityname,email,tel,location,}= req.body;
    console.log(req.files)
    if(facilityname===""){
      res.json({errMessage:"Sorry can't have an empty facility Name"});
    }
    facilityName = await Facility.findOne({ facilityname: facilityname.toLowerCase() });
    if(facilityName){
      res.json({errMessage:'Sorry a facility already has this name'});
    }
    let existingEmail=null
    if(email!==""){
       existingEmail= await Facility.findOne({ email: email.toLowerCase() });
    }
    if(existingEmail){
      res.json({errMessage:'Sorry a facility with this email already exists'});
    }
    else{
      let streamUpload = (pld) => {
        return new Promise((resolve, reject) => {
          let stream = cloudinary.uploader.upload_stream(
            {
              folder: "sojourner"
            },
            (error, result) => {
              if (result) {
                resolve(result);
              } else {
                reject(error);
              }
            }
          );
          streamifier.createReadStream(pld.buffer).pipe(stream);
        });
      }
      let imgUploaded=[]
      if(FacilityImgs){
        for( var i=0; i<FacilityImgs.length;i++){
          imgUploaded[i] = (await streamUpload(FacilityImgs[i])).url;
        }
      }
      
      // if(imgUploaded){res.json(imgUploaded)}
        
      if(imgUploaded){
        let newFacility= new Facility({
          facilityname,email,tel,location,images:imgUploaded
        });
         // console.log(newFacility)
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
    }
  }
  catch(err){
  console.log(err);
  return res.json({errMessage:'Sorry could not add the new Facility'});
  }

}

module.exports = handler;