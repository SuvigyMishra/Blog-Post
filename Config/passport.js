const LocalStratergy = require("passport-local").Strategy;

const User = require("../Database/userDB");

module.exports = (passport) => {
    passport.use(
        new LocalStratergy({ usernameField: "email" }, (email, password, done) => {
            User.findOne({ email: email }).then((user) => {
                if (!User) {
                    return done(null, false, { message: "The user does not exist!" });
                }

                if (password === user.password) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: "Password does not match!" });
                }
            });
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
};
