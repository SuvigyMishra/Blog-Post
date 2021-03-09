const express = require("express");
const router = express.Router();

const Post = require("../Database/postsDB");
const User = require("../Database/userDB");

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

router.post("/delete/:id", (req, res) => {
    Post.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            console.log("Error Deleting post", err);
        }
        res.redirect("/");
    });
});

router.get("/new-post", require("./newPost"));
router.post("/new-post", require("./newPost"));

router.get("/signin", require("./signin"));
router.post("/signin", require("./signin"));

router.get("/signup", require("./signup"));
router.post("/signup", require("./signup"));

module.exports = router;
