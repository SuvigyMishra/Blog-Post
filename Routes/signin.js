const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../Database/userDB");

router
    .route("/")
    .get((req, res) => {
        return res.render("signin", { title: "Sign In" });
    })
    .post((req, res, next) => {
        passport.authenticate("local", {
            successRedirect: "/",
            failureRedirect: "/signin",
        })(req, res, next);
    });

module.exports = router;
