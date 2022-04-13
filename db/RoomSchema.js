const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  let RoomSchema = new Schema(
    {
    facility:{type: Schema.Types.ObjectId, ref: "Facility"},
    roomCapacity: {
        type: Number,
        required: true,
      },
      pricing: [{
        currency:{type:String,enum:["GHS","USD"],default:"GHS"},
        amount:{type:Number,required:true},
        paymentCycle: {type:String, enum:["month","semester","year"]},
        residentType:{type:String,enum:["Student","NSS","Any"], default:"Any"},
      }],
      extraFeatures:[{extraFeature:String}]
    }
  );
  
  module.exports = mongoose.model('Room', RoomSchema);