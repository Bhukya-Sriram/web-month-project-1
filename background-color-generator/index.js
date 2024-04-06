const express = require("express");
const path = require('path');
// const fs = require("fs");
const app = express();
const logger = require("./middleware");
const port = 8001;

app.use(logger);
app.use(express.static(path.join(__dirname,"project-1")));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"project-1","BackgroundColor.html"));


    // console.log(req.url);
    // res.send("<h1>hey you!</h1>");
    // fs.readFile("./project-1/BackgroundColor.html","utf8",(err,content)=>{
    //     if(err){
    //         res.send("ooops error");
    //     } else {
           
    //         res.send(content);
    //         console.log(typeof content);
    //     }
    // });
});

app.get("/users",(req,res)=>{
    res.send({
        name:"sriram",
        email:"bhukya@gmail.com",
    });
});

app.listen(port,()=>{
    console.log(`server is running on ${port}..`);
});

