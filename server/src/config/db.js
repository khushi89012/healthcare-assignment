const mongoose = require('mongoose');
require("dotenv").config()

const connect = mongoose.connect(process.env.MDB).then(()=>{
    console.log("Connected to DB")
}).catch((err)=>{
    console.log(err)
})


