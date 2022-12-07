const express = require('express');
const app = express();
const port = 4001;


app.get("/",(_,res)=>{
   res.send ("hello express");
})

app.listen(port,()=>{
    console.log('serveur en marche');
})