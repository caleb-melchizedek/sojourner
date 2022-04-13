var facility = require('./facilitySchema');

async function handler( req, res){
try{
    results = await facility.find(
        {
          email: req.body.email.toLowerCase(),
        },
        {
          email: 1,
          password: 1,
          _id: 1,
        }
      );

}
catch(err){
    console.log(err);
    return res.status(500).json({message:'Sorry could not what you were looking for'});
  }
}

module.exports = handler;