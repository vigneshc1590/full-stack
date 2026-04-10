const express = require('express');

const router = express.Router();

router.get("/first", (req,res,next)=>{
    
    res.send('<h1> <form action = "/second" method = "POST"><input type = "text" name = "Data" /><input type = "submit" name = "submit"/> </form> </h1>');

})

router.post("/second", (req,res,next)=>{
   
    console.log(req.body);
    res.send("<b>All Set done<b>")    
})


router.use((req,res,next)=>{
    console.log('root middle ware');
    res.send("welcome to Root");
    next();
})


module.exports = router