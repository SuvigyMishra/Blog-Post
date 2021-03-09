const express = require("express");
const router = express.Router();

const User = require("../Database/userDB");

router
    .route("/")
    .get((req, res) => {
        return res.render("signup", { title: "Sign Up" });
    })
    .post((req, res) => {
        const { fname, lname, email, password, confirm_password } = req.body;
        let errors = [];

        if (password !== confirm_password) {
            errors.push({ msg: "Passwords do not match" });
        }

        if (errors.length > 0) {
            res.render("signup", {
                title: "Sign Up",
                errors,
                fname,
                lname,
                email,
                password,
                confirm_password,
            });
        } else {
            User.findOne({ email: email }).then((user) => {
                if (user) {
                    errors.push({ msg: "Email already exists!" });
                    res.render("signup", {
                        title: "Sign Up",
                        errors,
                        fname,
                        lname,
                        email,
                        password,
                        confirm_password,
                    });
                } else {
                    User.create({
                        fname,
                        lname,
                        email,
                        password,
                    });

                    return res.render("signin", { title: "Sign In" });
                }
            });
        }
    });

module.exports = router;
