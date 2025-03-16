const { Schema, default: mongoose } = require("mongoose");


const blogSchema = new Schema({
    title: {type: String, required: true, unique: true , maxlength: 100},
    content: {type: String, required: true,  maxlength: 2000},
    authors: [String]
})

module.exports = mongoose.model("Blog", blogSchema)