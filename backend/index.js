const express = require ("express");
const mongoose = require ("mongoose");

const app = express ();


mongoose.connect("mongodb+srv://manuma:sZIJnRZAz8s4fwJg@cluster0.hspjmtk.mongodb.net/academia")
.then(()=>{
    console.log(`Right conecction with BBDD`)
})
.catch((err)=>{
    console.log(`Error connection with BBDD: ${err}`)
})

app.listen(3000, () => { 
    console.log (`API working...on port 3000!`)
})