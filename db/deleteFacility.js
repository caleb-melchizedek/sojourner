const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')

var Rooms = require('./roomSchema')
var Facility = require('./facilitySchema');

async function handler( req, res){
  try{
    let {_id}= req.body;
    let facilityToDelete= await Facility.findOne({ _id:_id });
    if(!facilityToDelete){
      res.json({errMessage:'Sorry No such facility exists on the database'});  
    }
    else{
      facilityToDelete.images.forEach((img)=>{
        
        let arr=img.split('/').filter((val, index, ar) => index > ar.length - 3)
        arr[1]= arr[1].substring(0, arr[1].lastIndexOf('.'))
        console.log(arr);
        cloudinary.uploader.destroy(`${arr[0]}/${arr[1]}`, function(error,result) {
          if (error)throw(error)
          console.log(result) })
      })
      let deletedRooms = await Rooms.deleteMany({facility:_id})
      if(deletedRooms){
        let deletedFacility = await Facility.findOneAndDelete({ _id:_id });
        if(!deletedFacility){
          res.json({errMessage:'Sorry No such facility exists on the database'});
        }else{
          res.json({success:"yes"})
        }

      }
      
      }

    
  }catch(err){
    console.log(err);
    return res.json({errMessage:'Sorry could not delete the new Facility'});
  }

}

module.exports = handler;