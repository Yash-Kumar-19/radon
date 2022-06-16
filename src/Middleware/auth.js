
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const jwtValidation = function(req, res, next){
try {  
  let token = req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];

if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

let decodedToken = jwt.verify(token, "functionup-radon");
if (!decodedToken)
  return res.status(401).send({ status: false, msg: "Authentication Failed" });

  next()
}
catch (err){
  console.log("this error is from token validation", err.message)
  res.status(500).send({msg : err.message})
}
}

const authorise = async function(req, res, next) {
try{
    let token = req.headers["x-Auth-token"]
  if (!token) token = req.headers["x-auth-token"]
  
  let decodedToken = jwt.verify(token, "functionup-radon")
  let userAccessing = req.params.userId
  let userLoggedIn = decodedToken.userId

  let user = await userModel.findById(userAccessing)
  if(!user) {
      return res.status(404).send({status: false, message: "no such user exists"})
  }
  if(userAccessing != userLoggedIn) {
    return res.status(403).send({status: false, msg: 'User not authorised'})
  }

    next()
  }
  catch (err){
    console.log("this error is from authorisation ", err.message)
    res.status(500).send({msg : err.message})  
  }  
  }

module.exports.jwtValidation = jwtValidation
module.exports.authorise =authorise


//62a8c2a37bc09de25e36d112