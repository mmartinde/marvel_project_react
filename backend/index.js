const express = require ("express");
const mongoose = require ("mongoose");
const cors = require ("cors");

require('dotenv').config();
const CONNECTIONSTRING = process.env.CONNECTIONSTRING;

// Create an instance of the Express application

const userRoutes = require("./routes/user.routes");
const comicRoutes = require ("./routes/comic.routes") ;

const app = express (); // creates a simple Express application and assigns it to a constant variable named app.const productRoutes = require ("./routes

app.use(cors()); // Allow cross-origin requests from any origin for testing purposes only

app.use(express.json());  //we enable the option of passing data through post in json format

// Connect to MongoDB database using Mongoose
mongoose.connect(CONNECTIONSTRING)
.then(()=>{
    console.log(`Right conection with BBDD`)
})
.catch((err)=>{
    console.log(`Error conection with BBDD: ${err}`)
})

app.use("/api/users", userRoutes);  //It is indicated to which route the user requests are to be directed.
app.use("/api/comics", comicRoutes); //It is indicated to which route the comics requests are to be directed.

app.listen(process.env.PORT, () => { 
    console.log (`API working...on port 3000!`)
})