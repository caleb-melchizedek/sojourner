const facility = require('./facilitySchema');
const room = require('./roomSchema');


async function handler( req, res){
    const facilityId= req.params.facilityId
    // console.log(roomId)
    try{
        let currentFacility = await facility.find(
            {"_id":facilityId},
            {"__v":0}
            )
        let facilityRooms = await room.find(
            {facility:facilityId},
            {"facility":0, "__v":0}
            )
        if(facilityRooms && currentFacility){
            // console.log(results)
            res.status(200).json({facility:currentFacility, rooms: facilityRooms})
        }
        // else {throw("empty array")}
    }
    catch(err){
        console.log(err)
        res.json(err)
    }
}

module.exports = handler;