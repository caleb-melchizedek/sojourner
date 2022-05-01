const room = require('./roomSchema');
async function handler( req, res){
  let {lowestPrice,highestPrice,roomCapacity,paymentCycle} = req.body
  console.log({lowestPrice,highestPrice,roomCapacity,paymentCycle})
  //res.json(`you searched for rooms with these params ${lowestPrice}, ${highestPrice},${roomCapacity},${paymentCycle}`)
try{
  var results
   
  // only three inputs
  if(lowestPrice!=="" && highestPrice!=="" && roomCapacity!=="" && paymentCycle===""){
    results = await room.find({"pricing.amount":{$gte:lowestPrice, $lte:highestPrice},"roomCapacity":roomCapacity}).select({"__v":0}).populate("facility",{"_id":0, "__v":0})
  }

  if(lowestPrice!=="" && highestPrice!=="" && roomCapacity==="" && paymentCycle!==""){
    results = await room.find({"pricing.amount":{$gte:lowestPrice, $lte:highestPrice},"pricing.paymentCycle":paymentCycle}).select({"__v":0}).populate("facility",{"_id":0, "__v":0})
  }

  if(lowestPrice!=="" && highestPrice==="" && roomCapacity!=="" && paymentCycle!==""){
    results = await room.find({"pricing.amount":{$gte:lowestPrice},"roomCapacity":roomCapacity,"pricing.paymentCycle":paymentCycle}).select({"__v":0}).populate("facility",{"_id":0, "__v":0})
  }

  if(lowestPrice==="" && highestPrice!=="" && roomCapacity!=="" && paymentCycle!==""){
    results = await room.find({"pricing.amount":{$lte:highestPrice},"roomCapacity":roomCapacity,"pricing.paymentCycle":paymentCycle}).select({"__v":0}).populate("facility",{"_id":0, "__v":0})
  }
  

  // only two inputs
  if(lowestPrice!=="" && highestPrice!=="" && roomCapacity==="" && paymentCycle===""){
    results = await room.find({"pricing.amount":{$gte:lowestPrice, $lte:highestPrice}}).select({"__v":0}).populate("facility",{"_id":0, "__v":0})
  }
  if(lowestPrice!=="" && highestPrice==="" && roomCapacity!=="" && paymentCycle===""){
    results = await room.find({"pricing.amount":{$gte:lowestPrice},"roomCapacity":roomCapacity}).select({"__v":0}).populate("facility",{"_id":0, "__v":0})
  }

  if(lowestPrice!=="" && highestPrice==="" && roomCapacity==="" && paymentCycle!==""){
    results = await room.find({"pricing.amount":{$gte:lowestPrice},"pricing.paymentCycle":paymentCycle}).select({"__v":0}).populate("facility",{"_id":0, "__v":0})
  }

  if(lowestPrice==="" && highestPrice!=="" && roomCapacity!=="" && paymentCycle===""){
    results = await room.find({"pricing.amount":{ $lte:highestPrice},"roomCapacity":roomCapacity}).select({"__v":0}).populate("facility",{"_id":0, "__v":0})
  }

  if(lowestPrice==="" && highestPrice!=="" && roomCapacity==="" && paymentCycle!==""){
    results = await room.find( {"pricing.amount":{$lte:highestPrice},"pricing.paymentCycle":paymentCycle}).select({"__v":0}).populate("facility",{"_id":0, "__v":0})
  }

  if(lowestPrice==="" && highestPrice==="" && roomCapacity!=="" && paymentCycle!==""){
    results = await room.find({"roomCapacity":roomCapacity,"pricing.paymentCycle":paymentCycle}).select({"__v":0}).populate("facility",{"_id":0, "__v":0})
  }

  // only one input

  if(lowestPrice!=="" && highestPrice==="" && roomCapacity==="" && paymentCycle===""){
    results = await room.find({"pricing.amount":{ $gte:lowestPrice}}).select({"__v":0}).populate("facility",{"_id":0, "__v":0})
  }
  if(lowestPrice==="" && highestPrice!=="" && roomCapacity==="" && paymentCycle===""){
    results = await room.find({"pricing.amount":{ $lte:highestPrice}}).select({"__v":0}).populate("facility",{"_id":0, "__v":0})
  }
  if(lowestPrice==="" && highestPrice==="" && roomCapacity!=="" && paymentCycle===""){
    results = await room.find({"roomCapacity":roomCapacity}).select({"__v":0}).select({"__v":0}).populate("facility",{"_id":0, "__v":0})
  }
  if(lowestPrice==="" && highestPrice==="" && roomCapacity==="" && paymentCycle!==""){
    results = await room.find({"pricing.paymentCycle":paymentCycle}).select({"__v":0}).select({"__v":0}).populate("facility",{"_id":0, "__v":0})
  }
    
  // no inputs
  if(lowestPrice==="" && highestPrice==="" && roomCapacity==="" && paymentCycle===""){
    results = await room.find({}).select({"__v":0}).populate("facility",{"_id":0, "__v":0});
  }
  
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