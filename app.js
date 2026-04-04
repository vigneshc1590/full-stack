const express = require('express');

const http = require('http');

const app = express();

const server = http.createServer(app);

app.use((req,res,next)=>{
    console.log("express working smoothly");

    next();

    
})


app.use((req,res,next)=>{
    console.log("express working smoothly for second time");
    next();

    
})


app.use((req,res,next)=>{
    console.log("express working smoothly for third time");
    res.send('<h1>wlecome to my first express js </h1>');
    next();
})

server.listen(3000)
