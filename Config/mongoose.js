const mongoose = require("mongoose");

//Connecting to database
mongoose.connect("mongodb://localhost/blog_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const db = mongoose.connection;

//Connect to server and make sure it is working
db.on("error", (err) => {
    //If there is an error, Log it
    console.log("Error connecting to Data Base", err);
});

db.once("open", () => {
    //When up and running, Log it
    console.log("Connected to Post Database");
});

module.exports = db;
