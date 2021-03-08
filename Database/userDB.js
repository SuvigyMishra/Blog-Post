const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

//Connecting to database
mongoose.connect("mongodb://localhost/blog_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

//Connect to server and make sure it is working
mongoose.connection.on("error", (err) => {
    //If there is an error, Log it
    console.log("Error connecting to Data Base", err);
});

mongoose.connection.once("open", () => {
    //When up and running, Log it
    console.log("Connected to User Database");
});

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

//Encrypting passwords so that they are not stored as plain texts
userSchema.plugin(encrypt, { secret: process.env.KEY, encryptedFields: ["password"] });

const User = mongoose.model("User", userSchema);

module.exports = User;
