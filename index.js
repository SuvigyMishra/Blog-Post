//Setting Env and other dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");

//Body Parser
app.use(express.urlencoded({ extended: false }));

app.use(express.static("./Static")); //Static files for the app

app.set("view engine", "ejs"); //Set EJS as view engine

app.set("views", "./Static/Views"); //Setting path for views

//Creating a session
app.use(
    session({
        secret: process.env.KEY,
        saveUninitialized: false,
        resave: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

//Routing to routes file
app.use("/", require("./Routes/routes"));

//Setting the Port and Starting the Server
const port = process.env.PORT;
app.listen(port || 8000, (err) => {
    if (err) {
        console.log(`Error while starting the project ${err}`);
    } else {
        console.log("Server started!");
    }
});
