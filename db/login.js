var bcrypt = require('bcrypt');
var User = require('./adminSchema');

async function handler( req, res){
  try{
    let {email,password}= req.body;

   let  user = await User.findOne(
      {email: email.toLowerCase()},
      {
        "__v":0
      }
    );
      // console.log(user);
    if(!user)  res.json({errMessage:'Sorry seems you are not an admin try another email'});
    else{
      // console.log(`from login ${user.password.toString()}`);
      let pwd = await bcrypt.compare(password,user.password.toString() );
      if(!pwd){
        res.json({errMessage:'Sorry you entered the wrong password'});      
      }
      else{
        res.json({adminId:user._id});
      }
    }
    
  
  } catch(err){
    console.log(err);
    return res.status(500).json({errMessage:'Sorry could not Login you in check yourlogin details'});
  }


}

module.exports = handler;