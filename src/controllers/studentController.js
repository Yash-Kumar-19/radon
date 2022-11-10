const studentModel = require("../models/studentModel");
const teacherModel = require("../models/teacherModel");

function isValid(value) {
    if (typeof value == "undefined" || value == null) return false;
    if (typeof value == "string" && value.trim().length === 0) return false;
    return true;
  }
  
  const isValidObjectId = function (ObjectId) {
    if (!mongoose.Types.ObjectId.isValid(ObjectId)) return false;
  
    return true;
  };

  const createStudent = async function (req, res) {
    try {
      if (Object.keys(req.body).length == 0) {
        return res
          .status(400)
          .send({
            status: false,
            message: "No details given. Kindly enter some.",
          });
      }
  
      const { name, subject, marks } = req.body;
      if (!isValid(name)) {
        return res.status(400).send({ status: false, message: "name is mandatory" })
    } 
    if (!isValid(subject)) {
        return res.status(400).send({ status: false, message: "subject is mandatory" })
    } 

    if (!isValid(marks)) {
        return res.status(400).send({ status: false, message: "marks is mandatory" })
    } 
   
    req.body.teacherId = decoded.userId
    
    let student= await studentModel.create(req.body)

    res.status(201).send({
        status :true,
        data : student
     })
       
    } catch (err) {
      return res.status(500).send({ status: false, message: err.message });
    }
  }



const getAllStudents = async (req, res) => {
    try {
        
        let checkStudents = await studentModel.find({teacherId : decoded.userId})
        if (checkStudents.length === 0) return res.status(404).send({ status: false, message: "Students Not Found" });

        //---------[Send Response]

        res.status(200).send({ status: true, message: 'Success', data: checkStudents })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

const getStudentById = async (req, res) => {
    try {
        let id = req.params.studentId
        if(!isValidObjectId(id)){
            return res.status(400).send({ status: false, message: "not a valid studentId" })
        }
        let checkStudents = await studentModel.findOne({_id : id})
        if (checkStudents) return res.status(404).send({ status: false, message: "Students Not Found" });

        //---------[Send Response]

        res.status(200).send({ status: true, message: 'Success', data: checkStudents })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}


const updateMarks  = async (req, res) => {
    try {
        let id = req.params.studentId

        if(!isValidObjectId(id)){
            return res.status(400).send({ status: false, message: "not a valid studentId" })
        }

        if (Object.keys(req.body).length == 0) {
            return res
              .status(400)
              .send({
                status: false,
                message: "No details given. Kindly enter some.",
              });
          }
      
          const {subject, marks } = req.body;

        let checkStudents = await studentModel.findOne({_id : id, subject:subject,teacherId : decoded.userId})
        if (!checkStudents) return res.status(404).send({ status: false, message: "Student Not Found" });

         checkStudents.marks += marks

         await checkStudents.save()
       
        //---------[Send Response]

        res.status(200).send({ status: true, message: 'Success', data: checkStudents })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports = {createStudent,updateMarks,getStudentById,getAllStudents}