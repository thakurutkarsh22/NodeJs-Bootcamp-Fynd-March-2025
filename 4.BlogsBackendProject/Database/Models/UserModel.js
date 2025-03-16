const { Schema, default: mongoose} = require("mongoose");


const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 8},
    username: {type: String, required: true, minlength: 5, unique: true}
}, {timestamps: true});


module.exports = mongoose.model("User", userSchema)

