const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  let FacilitySchema = new Schema(
    {
    fullname: {
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
        type:String,
      },
      location:{
        type:String,
        required:true
      }
    }
  );
  
  module.exports = mongoose.model('Facility', FacilitySchema);