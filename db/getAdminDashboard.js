const admin = require('./adminSchema');
const facility = require('./facilitySchema');
// var {imgStorage} = require('../db/env');
// const { Deta } = require("deta");

// // add your Project Key
// const deta = Deta(imgStorage.driveKey);
// // name your Drive
// const facilityPhotos = deta.Drive("facilityPhotos");


async function handler(req, res){
    const adminId= req.params.adminId
    console.log(adminId)
    try{
        let adminDetails =await admin.findOne({"_id":adminId},{'email':1, 'fullname':1,'image':1});
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