const { count } = require("console")
const NovelModel= require("../models/NovelModel")
const AuthorModel= require("../models/AuthorModel")

const createNovel= async function (req, res) {
    let data= req.body
 let savedData= await NovelModel.create(data)
    res.send({msg: savedData})
}


const createAuthor= async function (req, res) {
    let data= req.body
 let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const getBooksByCB= async function (req, res) {
let authorId= await AuthorModel.findOne({authorName : "Chetan Bhagat"}).select({author_id : 1 , _id : 0})
console.log(authorId)
let booksByCB = await NovelModel.find(authorId)
    res.send({msg: booksByCB})
}

const getUpdatedPrice = async function(req,res){
    let updatePrice = await NovelModel.findOneAndUpdate(
        {novelName : "Two states"},
        {$set: { price :100}},
        {new : true}
        )
    console.log(updatePrice)
    let aName = await AuthorModel.find({ author_id : updatePrice.author_id}).select({authorName : 1, _id : 0})
    let price = updatePrice.price
    res.send({msg : aName[0],price})
}

const getPriceAndAuthor = async function(req,res){
    let priceRange = await NovelModel.find({   price : {$gte :50 , $lte: 100}}).select({ author_id : 1, _id : 0})
    console.log(priceRange)
    for(index = 0 ; index < priceRange.length; index++){
        priceRange[index] =  await AuthorModel.find(priceRange[index]).select({authorName :1, _id : 0})
    }
    
    res.send({  msg : priceRange})
}




module.exports.createNovel = createNovel
module.exports.createAuthor = createAuthor
module.exports.getBooksByCB = getBooksByCB
module.exports.getUpdatedPrice = getUpdatedPrice
module.exports.getPriceAndAuthor = getPriceAndAuthor