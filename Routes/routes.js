const express = require("express");
const router = express.Router();

const Post = require("../Database/postsDB.js");

router.get("/", (req, res) => {
    Post.find({}, (err, posts) => {
        if (err) {
            console.log("Error finding posts", err);
        }

        return res.render("home", { title: "Blog Home", posts: posts });
    });
});

router.get("/about", (req, res) => {
    return res.render("about", { title: "About" });
});

router.get("/compose", (req, res) => {
    return res.render("compose", { title: "Compose New Post" });
});

router.post("/new-post", (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content,
    });
    return res.redirect("/");
});

module.exports = router;
