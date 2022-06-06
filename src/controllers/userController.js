const UserModel= require("../models/userModel")

const createBook = async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await UserModel.find()
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData

//1. What is Regex
// 2. Intro to async await
// 3. Various MongoDB queries - esp. find findById count select sort limit skip update
// 4. Filter conditions inside find :-
//  $or:   e.  find(   { $or : [ {cond1 } , {cond2} , {cond3} ] }  )    
//  $in : [0,10,20, 30, 40, 50] 
//  $eq
// $ne
//  $gt:
//  $lt:
//  $gte:
//  $lte:
//  $in:
//  $nin:
