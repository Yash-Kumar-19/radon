const mongoose = require('mongoose');

//Schema For Authors
const authorSchema = new mongoose.Schema({
    author_id : {
     type : Number,
     required : true
    },
    authorName: String,
    age: Number,
    address : String
},{timestamps: true});

module.exports = mongoose.model('author', authorSchema) 