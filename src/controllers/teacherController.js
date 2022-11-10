const teacherModel = require("../models/teacherModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length == 0) return false;
    return true;
}

const createTeacher = async function (req, res) {
    try {
        requestBody = req.body
        if (Object.keys(requestBody).length == 0) {
            return res.status(400).send({ status: false, message: "invalid requestbody" })
        }
        const { name, password } = requestBody
        if (!isValid(name)) {
            return res.status(400).send({ status: false, message: "name is mandatory" })
        } 
        if (!isValid(password)) {
            return res.status(400).send({ status: false, message: "password is mandatory" })
        }  
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, function (err, hash) {
          if (err)
            return res.status(500).send({ status: false, message: err.message });
            requestBody.password = hash;
        });
    
         const created = await teacherModel.create(requestBody)

         res.status(201).send({
            status :true,
            data : created
         })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}


const userLogin = async function (req, res) {
    try {
      if (Object.keys(req.body).length == 0) {
        return res
          .status(400)
          .send({ status: false, message: "please enter emailId and password" });
      }
      let userName = req.body.email;
      if (!userName)
        return res
          .status(400)
          .send({ status: false, message: "please enter emailId" });
  
      let password = req.body.password;
      if (!password)
        return res
          .status(400)
          .send({ status: false, message: "please enter password" });
  
      let user = await userModel.findOne({
        email: userName,
      });
      if (!user) {
        return res.status(401).send({
          status: false,
          message: "Email Id not correct",
        });
      }
      if (user) {
        // check user password with hashed password stored in the database
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
          return res
            .status(401)
            .send({ status: false, message: "Invalid Password" });
        }
      }
  
      let token = jwt.sign(
        {
          userId: user._id.toString(),
    
        },
        "projectAssignment",
        { expiresIn: "24h" }
      );
      res.setHeader("x-api-key", token);
      return res.status(200).send({
        status: true,
        message: "Success",
        data:
        {
          userId: user._id,
          token: token,
        }
      });
    } catch (err) {
      return res.status(500).send({ status: false, message: err.message });
    }
  };




module.exports={createTeacher,userLogin}