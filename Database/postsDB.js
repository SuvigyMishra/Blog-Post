const mongoose = require("mongoose");

//Connecting to database
mongoose.connect("mongodb://localhost/post_db", { useNewUrlParser: true, useUnifiedTopology: true });

//Connect to server
const db = mongoose.connection;
db.on("error", (err) => {
    //If there is an error, Log it
    console.log("Error connecting to Data Base", err);
});

db.once("open", () => {
    //When up and running, Log it
    console.log("Connected to Database");
});

//Post Schema
const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
