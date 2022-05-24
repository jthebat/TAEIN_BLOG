const express = require("express");
const Users = require("../schemas/users");
const Postings = require("../schemas/postings");  //==================
const router = express.Router();


router.get("/",(req,res)=>{
    res.send("this is root page");
});
//전체 게시글 목록 조회 API
router.get("/postings", async(req,res)=>{
    const totallist = await Postings.find();
    // console.log(temp);
    // res.send("test");
    const brieflist = totallist.map((item)=>{
        return{
            username: item.username,
            title: item.title,
            time: item.time,
        };
    });
    //console.log(temp2);
    res.json(brieflist.sort((a,b)=>(a.time<b.time)?1:-1));  //시간기준 내림차순 정렬
});
//게시글 조회 API username으로 조회
router.get("/postings/:username",async (req,res)=>{    
    const {username} = req.params; 

    const temp = await Postings.find();
    const temp2 = temp.filter((item)=> item.username===username );
    const temp3 = temp2.map((item)=>{
        return{
            username: item.username,
            title: item.title,
            time: item.time,
            content: item.content,
        };
    });           
        
    res.json(temp3);    
});
//게시글 작성 API    
router.post("/postings", async (req,res) => {
    const {username,passwords,title,content} = req.body;
    const users = await Users.find({username});
    
    const pos = await Postings.find();

    //console.log(pos.length,users.length,users);

    if(users.length){  //존재하는 사용자면 
        const createdData = await Postings.create({postId:pos.length+1,username,passwords,title,content,time:new Date()});
       
    }
    else{
        const createdData = await Postings.create({postId:pos.length+1,username,passwords,title,content,time:new Date()});
       await Users.create({username,passwords});
    }

    /*
    const postings = await Postings.find({authorId});
    

    if(postings.length){
        return res.status(400).json({success:false, errorMessage: "이미 있는 데이터입니다."});
    }
    */
    //const realtime = new Date();
      
    res.send("success"    );
    //res.json({postings: createdData});
    
});





router.get("/posting", (req,res) =>{
    res.send("this is posting page");
});

module.exports = router;