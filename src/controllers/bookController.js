const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const createBook= async function (req, res) {
    let book = req.body
    let requestAuthorID = req.body.author_id
    let requestPublisherID = req.body.publisher_id
    console.log(requestAuthorID)
    if(!requestAuthorID){
        res.send({msg: "AuthorId is required"})
    }else{
        let authorID = await authorModel.findById(requestAuthorID)
        console.log(authorID)
        if(!authorID){
            res.send({msg: "Not a valid AuthorId"})
        }else{
            if(!requestPublisherID){
                res.send({msg : "PublisherId is required"})
            }
            else{
                let publisherId = await publisherModel.findById(requestPublisherID)
                console.log(publisherId)
                if(!publisherId){
                    res.send({msg :"Not a valid Publisher Id" })
                }else{
                    let bookCreated = await bookModel.create(book)
                    res.send({data : bookCreated})
                    
                }
            }
            }
        }
    }


    
const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('publisher_id').populate('author_id')
    res.send({data: books})
}


const updateIsHardCover = async function(req,res){
    let books = await bookModel.find().populate('publisher_id').updateMany(
            {$or: [{'publisher_id.publisher_name': "Penguin"},{'publisher_id.publisher_name': "Harper Collins"}]},
               {$set: {isHardCover : true}} 
            )
    res.send({msg : books})
}

const updatePrice = async function(req,res){
     let books = await bookModel.find().populate('author_id').updateMany(
        {"author_id.rating" : {$gt:3.5}},
        {$inc : {price :10}} 
     )
    res.send({msg : books})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateIsHardCover= updateIsHardCover
module.exports.updatePrice= updatePrice

