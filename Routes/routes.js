const express = require("express");
const { user } = require("../Config/mongoose");
const router = express.Router();

const Post = require("../Database/postsDB");

router.get("/", (req, res) => {
    Post.find({}, (err, posts) => {
        if (err) {
            console.log("Error finding posts", err);
        }

        return res.render("home", { title: "Blog Home", posts: posts, user: req.user });
    });
});

router.get("/about", (req, res) => {
    return res.render("about", { title: "About" });
});

router.post("/delete/:id", (req, res) => {
    Post.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            console.log("Error Deleting post", err);
        }
        res.redirect("/");
    });
});

router.use("/new-post", require("./newPost"));

router.use("/signin", require("./signin"));

router.use("/signup", require("./signup"));

module.exports = router;
