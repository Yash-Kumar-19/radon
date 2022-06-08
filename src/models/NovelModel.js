const mongoose = require('mongoose');

//Schema For Novel Schema
const novelSchema = new mongoose.Schema( {
    novelName : String,
    author_id :{
        type : Number,
        required : true
    },
    price : Number,
    rating : Number
}, { timestamps: true });


module.exports = mongoose.model('novel', novelSchema) 


