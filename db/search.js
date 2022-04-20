var facility = require('./facilitySchema');
var room = require('./roomSchema');
async function handler( req, res){
  let {lowestPrice,highestPrice,roomCapacity,paymentCycle} = req.body
  console.log({lowestPrice,highestPrice,roomCapacity,paymentCycle})
  if(lowestPrice==='')lowestPrice=null;
  if(highestPrice==='')highestPrice=null;
  if(roomCapacity==='')roomCapacity=null;
  if(paymentCycle==='')paymentCycle=null;
  //res.json(`you searched for rooms with these params ${lowestPrice}, ${highestPrice},${roomCapacity},${paymentCycle}`)
try{

    results = await room.find(
        {
          $or: [
              {"pricing.amount":{$gte:lowestPrice, $lte:highestPrice},"roomCapacity":roomCapacity,"pricing.paymentCycle":paymentCycle},
              // {"roomCapacity":roomCapacity},
              // {"pricing.paymentCycle":paymentCycle}
          ]
        },
        {"__v":0}
      )
      .populate("facility",{"_id":0, "__v":0});
    if(results.length>0){
      console.log(results)
      res.status(200).json(results)
    }
    else {throw("empty array")}
    ;
}
catch(err){
    console.log(err);
    res.json([]);
  }
}

module.exports = handler;