const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')

var Facility = require('./facilitySchema');

async function handler( req, res){
  try{
    let FacilityImgs =req.files;
    console.log(FacilityImgs)
    let {facilityname,email,tel,location,_id}= req.body;
    console.log(_id)
    if(facilityname===""){
      res.json({errMessage:"Sorry can't have an empty facility Name"});
    }
    
    
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
    let imgUploaded =[] 
    if(FacilityImgs){
      for( var i=0; i<FacilityImgs.length;i++){
        imgUploaded[i]= (await streamUpload(FacilityImgs[i])).url;
      }
    }
    let existingImgs= (await Facility.findOne({_id:_id },{'images':1,'_id':0})).images
    console.log(existingImgs)
    // let allimages= existingImgs.concat(imgUploaded)
    let updatedFacility = await Facility.findOneAndUpdate({ _id:_id },{facilityname,email,tel,location,images:[...existingImgs,...imgUploaded]});
    if(!updatedFacility){
      res.json({errMessage:'Sorry No such facility exists on the database'});
    }  
    else{
      // console.log(updatedFacility)
        res.json({success:"yes"})
    }
    
  } catch(err){
    console.log(err);
    return res.json({errMessage:'Sorry could not Update the Facility'});
  }

}

module.exports = handler;