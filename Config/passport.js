const LocalStratergy = require("passport-local").Strategy;

const User = require("../Database/userDB");

module.exports = (passport) => {
    passport.use(
        new LocalStratergy({ usernameField: "email" }, (email, password, done) => {
            User.findOne({ email: email }).then((user) => {
                if (!user) {
                    return done(null, false);
                }
                if (password === user.password) {
                    return done(null, user);
                } else {
                    return done(null, false);
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
