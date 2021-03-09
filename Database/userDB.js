const mongoose = require("mongoose");
const passport = require("passport");

//User Schema
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already in use"],
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
