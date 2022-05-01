const room = require('./roomSchema');
async function handler( req, res){
  let {lowestPrice,highestPrice,roomCapacity,paymentCycle} = req.body
  console.log({lowestPrice,highestPrice,roomCapacity,paymentCycle})
  //res.json(`you searched for rooms with these params ${lowestPrice}, ${highestPrice},${roomCapacity},${paymentCycle}`)
try{
  var results
    // if(lowestPrice==="" && highestPrice==="" && roomCapacity==="" && paymentCycle===""){
      results = await room.find().or(
        [
          {"pricing.amount":{$gte:lowestPrice, $lte:highestPrice},"roomCapacity":roomCapacity,"pricing.paymentCycle":paymentCycle},
          
          {"pricing.amount":{$lte:highestPrice},"roomCapacity":roomCapacity,"pricing.paymentCycle":paymentCycle},
          {"pricing.amount":{$gte:lowestPrice},"roomCapacity":roomCapacity,"pricing.paymentCycle":paymentCycle},
          {"pricing.amount":{$gte:lowestPrice, $lte:highestPrice},"pricing.paymentCycle":paymentCycle},
          {"pricing.amount":{$gte:lowestPrice, $lte:highestPrice},"roomCapacity":roomCapacity},

          {"pricing.amount":{$gte:lowestPrice, $lte:highestPrice}},
          {"pricing.amount":{$gte:lowestPrice},"roomCapacity":roomCapacity,},
          {"pricing.amount":{$gte:lowestPrice},"pricing.paymentCycle":paymentCycle},
          {"pricing.amount":{ $lte:highestPrice},"roomCapacity":roomCapacity},
          {"pricing.amount":{$lte:highestPrice},"pricing.paymentCycle":paymentCycle},
          {"roomCapacity":roomCapacity,"pricing.paymentCycle":paymentCycle},

          {"pricing.amount":{$gte:lowestPrice}},
          {"pricing.amount":{ $lte:highestPrice}},
          {"roomCapacity":roomCapacity,},
          {"pricing.paymentCycle":paymentCycle},
          // {"roomCapacity":roomCapacity},
          // {"pricing.paymentCycle":paymentCycle}
        ])
      .select({"__v":0})
      .populate("facility",{"_id":0, "__v":0});
    // }
  

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