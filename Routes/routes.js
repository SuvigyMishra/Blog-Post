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

router.post("/delete/:id", (req, res) => {
    Post.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            console.log("Error Deleting post", err);
        }
        return res.redirect("/");
    });
});

router
    .route("/signin")
    .get((req, res) => {
        return res.render("signin", { title: "Sign In" });
    })
    .post((req, res) => {
        //TODO: Sign in User
    });

router
    .route("/signup")
    .get((req, res) => {
        return res.render("signup", { title: "Sign Up" });
    })
    .post((req, res) => {
        if (req.body.password == req.body.confirm_password) {
           // TODO: Sign Up User
        }
    });

module.exports = router;
