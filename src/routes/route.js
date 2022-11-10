const express=require("express")

const  {createTeacher,userLogin} = require("../controllers/teacherController")

const  {createStudent,updateMarks,getStudentById,getAllStudents} = require('../controllers/studentController')

const {authentication} = require('../auth/auth')

const router=express.Router()


router.post("/create",createTeacher)

router.post("/login",userLogin)

router.post("/creteStudents",authentication,createStudent)

router.get("/allStudents",authentication,getAllStudents)

router.get("/students/:studentId",authentication,getStudentById)

router.put("update",authentication,updateMarks)






module.exports=router