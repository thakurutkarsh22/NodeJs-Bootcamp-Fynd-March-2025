const { Schema, default: mongoose} = require("mongoose");
const validator = require("validator");

const userSchema = new Schema({
    email: {type: String, required: true, unique: true, validate: (value) => validator.isEmail(value)},
    password: {type: String, required: true, minlength: 8},
    username: {type: String, required: true, minlength: 5, unique: true, validate: (value) => validator.isAlphanumeric(value)}
}, {timestamps: true});


module.exports = mongoose.model("User", userSchema)

