const express = require("express");
const router = express.Router();

const User = require("../Database/userDB");

router
    .route("/signin")
    .get((req, res) => {
        return res.render("signin", { title: "Sign In" });
    })
    .post((req, res) => {
        const { email, password } = req.body;
        let errors = [];
        User.findOne({ email: req.body.email }, (err, foundUser) => {
            if (!foundUser) {
                errors.push({ msg: "User not found!" });
                res.render("signin", {
                    title: "Sign In",
                    errors,
                    email,
                    password,
                });
            } else {
                if (foundUser.password !== password) {
                    errors.push({ msg: "Password incorrect!" });
                    res.render("signin", {
                        title: "Sign In",
                        errors,
                        email,
                    });
                } else {
                    res.redirect("/");
                }
            }
        });
    });

module.exports = router;
