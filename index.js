//Setting Env
require("dotenv").config();

//using express
const express = require("express");
const app = express();

//Body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("./Static")); //Static files for the app

app.set("view engine", "ejs"); //Set EJS as view engine

app.set("views", "./Static/Views"); //Setting path for views

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
