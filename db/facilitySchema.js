const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  let FacilitySchema = new Schema(
    {
    facilityname: {
        type: String,
        required: true,
        unique:true
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
        default:""
      },
      tel:{
        type:String,
      },
      location:{
        type:String,
        required:true
      },
      images:[String],
      
    }
  );
  
  module.exports = mongoose.model('Facility', FacilitySchema);