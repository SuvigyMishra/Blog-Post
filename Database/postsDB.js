const mongoose = require("mongoose");

//Connecting to database
mongoose.connect("mongodb://localhost/blog_db", { useNewUrlParser: true, useUnifiedTopology: true });

//Connect to server and make sure it is working
mongoose.connection.on("error", (err) => {
    //If there is an error, Log it
    console.log("Error connecting to Data Base", err);
});

mongoose.connection.once("open", () => {
    //When up and running, Log it
    console.log("Connected to Post Database");
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
