const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId  

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        
       teacherId :{
        type: ObjectId,
        ref : 'teacher',
       },

        subject : String,
        marks : Number
    },
    {timestamps: true}
)

module.exports = mongoose.model("student", studentSchema)