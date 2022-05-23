const express = require("express");
const connect = require("./schemas/index");
const app = express();
const port = 3000;

connect();

const postingRouter = require("./routes/posting");

const requestMiddleware = (req,res,next)=>{
    console.log("Request URL:", req.originalUrl, " - ",new Date());
    next();
};

app.use(express.json());

app.use(requestMiddleware);

app.use("/api",postingRouter);

app.get("/",(req,res)=>{
    res.send("Hello");
});

app.listen(port,()=>{
    console.log(port,"포트로 서버가 켜졌어요!");
});
