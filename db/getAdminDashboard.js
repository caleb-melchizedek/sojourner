const admin = require('./adminSchema');
const facility = require('./facilitySchema');

async function handler(req, res){
    const adminId= req.params.adminId
    console.log(adminId)
    try{
        let adminDetails =await admin.findOne({"_id":adminId},{'email':1, 'fullname':1,});
         let results = await facility.find({});
        if(adminDetails && results){
            console.log(results)
            res.json({admin:adminDetails, facilities: results})
        }
        else{

        }
        
    }
    catch(err){
        console.log(err)
        res.json(err)
    }
}

module.exports = handler;