const express = require("express");
const cros = require("cors");
const bodyParser = require("body-parser");
const users = require("./model/user.model")
const usersRouter = require("./routes/users.route")




const app = express();
app.use(cros());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use("/users", usersRouter)

// home route
app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
});


// route not found error
app.use((req, res, next)=>{
    res.status(404).json({message: "Route not found 404..."})
});

// server error

app.use((err, req, res, next)=>{
    res.status(500).json({message: "Server down please try after sometime"})
});



module.exports = app;