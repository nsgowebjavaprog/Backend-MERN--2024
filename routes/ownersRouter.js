const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");

// 1. Create only one owner not more then get following error.

if(process.env.NODE_ENV === "development"){
    router.post("/create",async function(req, res){
    let owners = await ownerModel.find();
    if(owners.length > 0){
        return res
        .status(504)
        .send("You don't Have Permission to Create a New Owner..");
    }

    let {fullname, email, password } = req.body;

    let createdowner = await ownerModel.create({
        fullname,
        email,
        password,
    });

    res.status(201).send(createdowner);    
    });        
}

router.get("/", function(req, res){
    res.send("Hello It's Working Now....!!");
});




module.exports = router;