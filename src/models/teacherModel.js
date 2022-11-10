const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        password: {
            type: String,
            required: true
        }
    },
    {timestmaps : true}
)

module.exports = mongoose.model("teacher", teacherSchema)
