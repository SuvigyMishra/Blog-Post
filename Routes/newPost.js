const express = require("express");
const router = express.Router();

const Post = require("../Database/postsDB");

router.get("/new-post", (req, res) => {
    return res.render("newPost", { title: "Compose New Post" });
});

router.post("/new-post", (req, res) => {
    const { postTitle, content } = req.body;

    let errors = [];

    if (!postTitle) {
        errors.push[{ msg: "Title cannot be empty!" }];
    }

    if (!content) {
        errors.push({ msg: "Content cannot be empty!" });
    }

    if (errors.length > 0) {
        res.render("newPost", {
            title: "Compose New Post",
            errors,
            postTitle,
            content,
        });
    } else {
        Post.findOne({ postTitle }).then((post) => {
            if (post) {
                errors.push({ msg: "Post by the same title already exists!" });
                res.render("newPost", {
                    title: "Compose New Post",
                    errors,
                    postTitle,
                    content,
                });
            } else {
                Post.create({
                    postTitle,
                    content,
                });
                res.redirect("/");
            }
        });
    }
});

module.exports = router;
