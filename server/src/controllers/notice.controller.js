const express = require('express');
const Notice = require("../models/notice.model")
const router = express.Router();


router.get("/",async(req,res)=>{
    try{
        const notice = await Notice.find().lean().exec()
        res.status(200).send({notice:notice})
    }
    catch(err){
        res.status(500).send(err.message)
    }
  
})


router.post("/",async(req,res)=>{
    try{
        const notice = await Notice.create(req.body)
        res.status(200).send(notice)
    }
    catch(err){
        res.status(500).send(err.message)
    }
})

module.exports = router