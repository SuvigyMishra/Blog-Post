const e = require("express");
const express = require("express");
const router = express.Router();
const checkAuthentication = require("../Config/auth");
const Post = require("../Database/postsDB");

router.get("/", (req, res) => {
    Post.find({}, (err, posts) => {
        if (err) {
            console.log("Error finding posts", err);
        }
        if (typeof req.user === "undefined") {
            return res.render("home", { title: "Blog Home", posts: posts });
        } else {
            return res.render("home", {
                title: "Blog Home",
                posts: posts,
                name: req.user.fname + " " + req.user.lname,
            });
        }
    });
});

router.get("/about", (req, res) => {
    return res.render("about", { title: "About" });
});

router.post("/delete/:id", checkAuthentication, (req, res) => {
    Post.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            console.log("Error Deleting post", err);
        }
        res.redirect("/");
    });
});

router.use("/new-post", checkAuthentication, require("./newPost"));

router.use("/signin", require("./signin"));

router.get("/signout", checkAuthentication, (req, res) => {
    req.logout();
    res.redirect("/");
});

router.use("/signup", require("./signup"));

module.exports = router;
