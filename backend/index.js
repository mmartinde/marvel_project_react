const express = require ("express");
const mongoose = require ("mongoose");

const userRoutes = require("./routes/user.routes");

const app = express ();
app.use(express.json());

// Connect to MongoDB database using Mongoose


mongoose.connect("mongodb+srv://manuma:sZIJnRZAz8s4fwJg@cluster0.hspjmtk.mongodb.net/marvel")
.then(()=>{
    console.log(`Right conection with BBDD`)
})
.catch((err)=>{
    console.log(`Error conection with BBDD: ${err}`)
})

app.use("/api/users", userRoutes);  //It is indicated to which route the user requests are to be directed.
app.listen(3000, () => { 
    console.log (`API working...on port 3000!`)
})