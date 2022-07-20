// dependencies
const express = require('express');
const cors = require('cors');
require('dotenv').config()
var bcrypt = require("bcrypt");
// import files
const connect = require("./src/config/db")
const {register,login }= require("./src/controllers/user.controller")

const noticeController = require("./src/controllers/notice.controller")
const Port = process.env.PORT
// express app
const app = express();
app.use(express.json())

// middleware
// app.use(cors());


// routes
app.post('/register',register)
app.post("/login",login)

// app.use('/', userController);
app.use('/', noticeController);


// server
app.listen(Port, async() => {
    await connect
    console.log('Server is running on port '+Port);
});