
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const jwtValidation = function(req, res, next){
  let token = req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];

if (!token) return res.send({ status: false, msg: "token must be present" });

let decodedToken = jwt.verify(token, "functionup-radon");
if (!decodedToken)
  return res.send({ status: false, msg: "token is invalid" });

  next()
}

const authorise = async function(req, res, next) {
  let token = req.headers["x-Auth-token"]
  if (!token) token = req.headers["x-auth-token"]
  
  let decodedToken = jwt.verify(token, "functionup-radon")
  let userAccessing = req.params.userId
  let userLoggedIn = decodedToken.userId

  let user = await userModel.findById(userAccessing)
  if(!user) {
      return res.send({status: false, message: "no such user exists"})
  }
  if(userAccessing != userLoggedIn) {
    return res.send({status: false, msg: 'User not authorised'})
  }

    next()
  }

module.exports.jwtValidation = jwtValidation
module.exports.authorise =authorise


//62a8c2a37bc09de25e36d112