var facility = require('./facilitySchema');
var room = require('./roomSchema');

async function handler( req, res){
    const roomId= req.params.roomId
    // console.log(roomId)
    try{
        results = await room.find(
            {"_id":roomId},
            {"__v":0}
            )
            .populate("facility",{"_id":0, "__v":0});
        if(results.length>0){
            // console.log(results)
            res.status(200).json(results)
        }
        else {throw("empty array")}
    }
    catch(err){
        console.log(err)
        res.json(err)
    }
}

module.exports = handler;