const mongoose = require("mongoose");

//Post Schema
const postSchema = new mongoose.Schema(
    {
        postTitle: {
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
