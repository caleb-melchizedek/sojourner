const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  let FacilitySchema = new Schema(
    {
    facilityname: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
      tel:{
        type:Number,
      },
      location:{
        type:String,
        required:true
      }
    }
  );
  
  module.exports = mongoose.model('Facility', FacilitySchema);