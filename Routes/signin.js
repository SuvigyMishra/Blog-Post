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
        let errors = [];
        const { email, password } = req.body;
        passport.authenticate("local", function (err, user) {
            if (err) {
                return next(err);
            }
            if (!user) {
                errors.push({ msg: "User Email or Password incorrect!" });
                return res.render("signin", {
                    title: "Sign In",
                    errors,
                    email,
                    password,
                });
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                
                return res.redirect("/");
            });
        })(req, res, next);
    });

module.exports = router;
