const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  let RoomSchema = new Schema(
    {
    facility:{type: Schema.Types.ObjectId, ref: "Facility", required:true},
    roomCapacity: {
        type: Number,
        required: true,
      },
      pricing: {
        currency:{type:String,enum:["GHS","USD"],default:"GHS", required:true},
        amount:{type:Number,required:true},
        paymentCycle: {type:String, enum:["month","semester","year"], required:true},
        residentType:{type:String,enum:["Student","NSS","Any"], default:"Any"},
      },
      images:[String],
      extraFeatures:String  
    } 
  );
  
  module.exports = mongoose.model('Room', RoomSchema);