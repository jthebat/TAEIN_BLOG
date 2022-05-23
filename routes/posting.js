const express = require("express");
const Users = require("../schemas/users");
const Postings = require("../schemas/postings");  //==================
const router = express.Router();


router.get("/",(req,res)=>{
    res.send("this is root page");
});
    
router.post("/postings", async (req,res) => {
    const {authorId,name,passwords,title,content,time} = req.body;

    const pos = await Postings.find({authorId});

    if(pos.length){
        return res.status(400).json({success:false, errorMessage: "이미 있는 데이터입니다."});
    }

    const createdData = await Postings.create({authorId,name,passwords,title,content,time});  

    res.json({pos: createdData});

    
});





router.get("/posting", (req,res) =>{
    res.send("this is posting page");
});

module.exports = router;