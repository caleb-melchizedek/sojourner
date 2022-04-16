var facility = require('./facilitySchema');
var room = require('./roomSchema');
async function handler( req, res){
  const {lowestPrice,highestPrice,roomCapacity,paymentCycle} = req.body
  console.log({lowestPrice,highestPrice,roomCapacity,paymentCycle})
  //res.json(`you searched for rooms with these params ${lowestPrice}, ${highestPrice},${roomCapacity},${paymentCycle}`)
try{
    results = await room.find(
        {
          "pricing.amount":{ $gte:lowestPrice, $lte:highestPrice},
          "roomCapacity":roomCapacity,
          "pricing.paymentCycle":paymentCycle,
        }
      );
    if(results.length>0){res.status(200).json(results)}
    else {throw("empty array")}
    ;
}
catch(err){
    console.log(err);
    res.status(500).json({message:'Sorry could not what you were looking for'});
  }
}

module.exports = handler;